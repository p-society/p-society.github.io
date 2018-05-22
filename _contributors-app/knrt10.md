---
name: Kautilya Tripathi
description: I am cool too.
picUrl: https://avatars3.githubusercontent.com/u/24803604?s=400&u=85195bfa8caeb798bedd19d060c91160f0c7c840&v=4
languages:
  - Javascript
  - Nodejs

githubUsername: knrt10
speciality:
  - I don't know.

github_url: https://github.com/knrt10
linkedIn_url: https://www.linkedin.com/in/kautilya-tripathi-35853713b/
twitter_url: https://twitter.com/knrt19
project:
  - |
      # typeracer-cli

      > Practice touch typing and compete with your friends all from the comfort of your shell and become a typing ninja :boom:.

      *But this has already been done. Why should I use this client?*

      Because most other shell clients don't offer the features that we do

      ## Features

      - Practice mode (offline mode)
      - User stats (words per minute, time taken)
      - Online mode (have a type-race by spawning up a server and sharing it with your friends)
      - Ask for a rematch after the race ends (online mode)
      - Can view the top 10 Highscores in online mode

      ## Installation

      run `npm i --global typeracer-cli` from your command line

      ## Possible Errors

      When you have installed this tool some times later you could find some error when you start **typerace**.

      This may be because new update might have been rolled out and you have to update to latest version.

      **How to update**

      Its same as installation just run `npm i --global typeracer-cli` from your command line

      Now even after that if you see any errors, follow the below steps

      - find **.nvm** folder in your home directory.

      -  cd to `.nvm/versions/node/${your node version}/bin` and delete **typerace file**
      -  cd to `.nvm/versions/node/${your node version}/lib/node_modules` and delete **typeracer-cli folder**
      - run `npm - -global typeracer-cli`

      These steps should resolve the isssue. If it does not please open an isssue.

      ## Usage

      run `typerace` or `typerace -h` to its usage

      **Output**

      ```
      Usage: typerace [options] [command]

      Options:

      -h, --help          output usage information

      Commands:

      practice|p          Start typeracer
      online|o [options]  Start game in online mode
      ```

      **Practice mode**

      - `typerace p` to start practice mode

      **Online mode**

      - `typerace o -f` to start online mode which will prompt a question

      **Are you starting server for race (y/N) ?**

      Now 2 cases are there

      - If **yes**
      - You will share **Room to join for race**, **Number of racers**, **Number(sort of password)**
      - All the above will be prompted if you select yes and all of your friends should fill them out same.

      - If **no**  
      - Ask for **Room to join for race**, **Number of racers**, **Number(sort of password)** from your friend who created a private room to race.

      **Highscores**

      To view the top 10 Highscores in online mode.

      run `typerace o -s`

      Enjoy :fire:

      ## Contributing

      If you think of a feature enhancement or find a bug kindly raise an issue. We also welcome you to work on your issues by just commenting down on them with *"I would like to work on this"*. All contributions are appreciated.

      **General Setup**

      - fork the repository

      - clone your forked repository

      - set the upstream remote

      - cd to folder and run `npm install`

      - create a `.env` file in root directory and put following in it

      ```
      DATABASE=your mongoDB url
      ```

      - run `npm start`

      *But I don't know how to code, is there any other way I can contribute?*

      Yes, ofcourse you can we need lots of paragraphs so that our users don't get bored by typing out the same text over and over  again. To add a paragraph follow these steps:

      - Add paragraphs in `paragraphs/para.json`
      - run `npm test`
      - **Important:** all tests should pass as you would get a test failure for duplicate paragraphs.
      - Find same paragraphs then run `npm test`
      - If all tests pass locally then **Open a PR**

      ## Support Us

      We are a bunch of undergrads passionate about software development looking to make cool stuff. A little motivation and support helps us a lot. If you like this nifty hack you can support us by doing any (or all :wink: ) of the following:
      - :clap: Upvote on producthunt [producthunt](https://www.producthunt.com/posts/typeracer-cli)
      - :star: Star us on [Github](https://github.com/p-society/typeracer-cli) and make us trend so that other people can know about our project.
      - :clap: Clap for us on [Medium](https://medium.com/programming-society-gazette/shellracer-bbce3efbe888)
      - Tweet about us
      - Share this on Facebook
      - Install it and increase our download count on npm
      - Donation (Coming Soon)

      ## Contributors

      - *Conceived by:*  :thought_balloon: <a href="https://github.com/shibasisp">Shibasis Patel</a>
      - *Developed by:*  :computer: <a href="https://github.com/knrt10">Kautilya Tripathi</a>
      - *Documentation by:*  :pencil: <a href="https://github.com/palash25">Palash Nigam</a> & <a href="https://github.com/IamRaviTejaG">Ravi Teja Gannavarapu</a>

  - |

      # cloudinary-cli-tool

      Upload images to **cloudinary.com** using your command line.

      # Preview

      <img src = "https://user-images.githubusercontent.com/24803604/39407712-f0c2cbcc-4be7-11e8-93ee-9c417d62bf5a.gif"/>

      # Installation

      **NPM**

      `npm i --global cloudinary-cli-tool`

      **Set env file**

      `cloudTool env`

      This will ask for your cloudinary configuration which you can get from [cloudinary console](https://cloudinary.com/console/)

      # Usage

      Run `cloudTool -h` to see commands you can use

      **Output**

      ```
      Usage: cloudTool [options] [command]

      Options:


      -h, --help                                output usage information

      Commands:

      env|e                                     Set your env file
      upload|u [options] <file>                 Upload file(s)
      list|s [options]                          Search files and list them
      rename|r <public_id_old> <public_id_new>  Remane your public_id
      delete|d [options] <public_id>            Delete your file(s)
      ```    

      Run `cloudTool <command> -h` to see particular commands usage

      # How to upload

      **Single File**
      - `cloudTool u <path to file>`

      **Multiple files**
      - `cloudTool u -a <path to file1> <path to file2> <path to file3> ...`

      # How to fetch

      **Help command**
      - `cloudTool list -h`

      You will get following output

      ```
      Options:

      -a, --all            get all files
      -s, --search <file>  Search file by publicID
      -t, --type <tag>     Search by type. <tag> can be <image> or <gif>
      -h, --help           output usage information
      ```

      To get **all files**
      - `cloudTool list -a`

      If you **know public_id** of file you can **get particular file**
      - `cloudTool list -s public_id`

      You can also fetch by **type of file**
      -  For images `cloudTool list -t image`
      -  For gif `cloudTool list -t gif`

      # How to update fileName

      `cloudTool r <old public_id> <new public_id>`  

      # Delete file

      **Single File**
      - `cloudTool d <public_id>`

      **Multiple files**
      - `cloudTool d -a <public_id1> <public_id3> <public_id3> ...`


---
