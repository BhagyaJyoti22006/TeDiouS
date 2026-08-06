1. Create a new Repository in Github.

2. Copy the `playwright.yml` file from current directory to the repo directory inside `<repo>\.github\workflows\`.

3. Copy the `scrape.py` file from current directory to the repo directory inside `<repo>\`.

4. Replace `<roll>` with the correct roll number in `playwright.yml` and `<I>` and `<J>` with the assigned range of seeds in `scrape.py`.

5. Push the Respository to `main`.

6. Go to Github Dashboard and go to `Settings` and click on `Developer settings` from left sidebar and select `Personal access tokens` then `Fine-grained tokens` and click `Generate new token`.

7. Choose a `Token name` and under `Repository access` select `Only select repositories` and choose the created Repository.

8. Click `+ Add permissions` and provide all permissions and then click `Generate token` which should be copied as `<TOKEN>`.

9. Paste the answer as `https://github.com/<user>/<repo> <TOKEN>`.

