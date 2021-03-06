

    const FetchfromAPI = function(...args){
            let error;
            return fetch(...args)
              .then(res => {
                if (!res.ok) {
                  error = { code: res.status };
                  if (!res.headers.get('content-type').includes('json')) {
                    error.message = res.statusText;
                    return Promise.reject(error);
                  }
                }
              return res.json()
            })
            .then(data => {
              if (error) {
                error.message = data.message;
                return Promise.reject(error);
              }
              return data;
            });
          };





    export default FetchfromAPI
