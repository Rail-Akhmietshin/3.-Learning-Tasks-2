class HttpError extends Error {
    constructor(response) {
      super(`${response.response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        let json = await response.json();
        return json;
    }
        
    throw new HttpError(response);
}
  
  // Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
    while (true) {
        let name = prompt("Введите логин?", "iliakan");
        
        try {
            let user = await loadJson(`https://api.github.com/users/${name}`);
            if (user.name) {
                alert(`Полное имя: ${user.name}.`);
                return user;
            }
        } catch (err) {
            if (err instanceof HttpError && err.response.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
            }
            throw err;
        }
    }
}
  
demoGithubUser();