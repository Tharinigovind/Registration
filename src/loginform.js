export function configureFakeBackend() {
    let users = [{ firstName: 'Tharini', lastName: 'G',password: '1234567', }];
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);

                    // find if any user matches login credentials
                    let filteredUsers = users.filter(user => {
                        return user.fName === params.fName && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        // if login details are valid return user details
                        let user = filteredUsers[0];
                        let responseJson = {
                            firstName: user.firstName,
                            lastName: user.lastName
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        // else return error
                        reject('Name or password is incorrect');
                    }

                    return;
                }

                // get users
                if (url.endsWith('/users') && opts.method === 'GET') {
                    // check for fake auth token in header and return users if valid, this security 
                    // is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === `Basic ${window.btoa('test:test')}`) {
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users)) });
                    } else {
                        // return 401 not authorised if token is null or invalid
                        resolve({ status: 401, text: () => Promise.resolve() });
                    }

                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}