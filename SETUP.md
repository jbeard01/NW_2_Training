Installing NightWatch test Framework

Not required, but recommended:

VSCode ([installer](https://code.visualstudio.com/download))

Homebrew ([how to install](https://brew.sh/))

Install local dependencies:

Node.js

Download the macOS Installer directly from the http://nodejs.org  web site.

      If you want to download the package with terminal:

      curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- Index of /dist/latest/  | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"

Alternatives

Using Homebrew:

      brew install node

Java ([Java JDK](https://www.oracle.com/java/technologies/downloads/#java17))

Verify Java is already installed by opening bash or terminal window and running this command `java -version`. If installed, Java version will be displayed

in terminal type the following command: `which java` and the path for its location will be displayed

If not already installed:

Navigate to Download the Latest Java LTS Free  and download the latest version

Set/Verify JAVA_HOME path in .zshrc or .bash_profile (note since OS Catalina zsh is the default terminal)

 

In a terminal: set java home paths, something like this example

export JAVA_HOME=/usr/bin

export PATH=$JAVA_HOME/bin:$PATH

then open your .zshrc and verify the path has been set 
 - NOTE: you may need to create a new .zshrc profile
if so:

`touch .zshrc` to create a new profile.

 

Use the following command to open your profile in textedit from command line:

`open -e .zshrc`

paste these paths:

export JAVA_HOME=/usr/bin
export PATH=$JAVA_HOME/bin:$PATH

Save the file

Quit your terminal and reopen

 

Clone the NightWatch Automation Repo: NW_2_Training

Create a personal access token (required after Aug 13, 2021)
 - https://github.com/settings/tokens?type=beta

Navigate to the repo location in GitHub ([click here](https://github.com/jbeard01/NW_2_Training))

Click the “<>Code” button and select HTTPS and copy the link using the button provided 

In terminal type the following command: `cd Desktop`

Then this command: `git clone <paste the copied location here>`, and hit enter

Authenticate as needed, and the automation repo should be available locally on your desktop
NOTE: use your PAT (personal access token) as your password

Once the repo has been cloned locally, open your IDE (Visual Studo Code is free to use) and CD into the project or open from the IDE main menu

Open a terminal window (either in IDE or from the machine) and run the following command: npm install

You should be all set to go now!