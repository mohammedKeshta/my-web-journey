#Notes

- The Linux shell comes with a long list of commands that can be composed to automate any task imaginable.
- A terminal is just an interface to to the **shell**

## echo

**the echo command it how to get the shell to print messages back to us**
`echo 'Hello, Mohammed'`

- The dollar symbol in front of the word indicate that it's a shell variable.
  `echo $COLUMNS x $LINES`

##ls -> List Files
**List the files in the directory.**

##cd -> Change Directory
**Move to a different directory.**
`cd .. ; ls`

##pwd -> Print Working Directory
`pwd`

##ls -l
**List files with giving more info about it.**
`ls -l Mohammed/*.pdf`

##mkdir: Creates directories.
`mkdir mohammedelzanaty`

##mv: Move files from a directory to another.
`mv soruce/Books distination/PDF`

##curl
**is used in command lines or scripts to transfer data.**
`curl -L -o dictionary.txt 'https://tinyurl.com/zeyq9vc'`

##cat -> Catenate/Concatenate
**reads the file and outputs the content**
`cat dictionary.txt`

##less
**reads the file and outputs the content screen by screen**
`less dictionary.txt`

##rm
**Delete files.**
`rm fileName.txt`

##rmdir
**Delete directories.**
`rmdir images/`

##grep:
**"global regular expression print,” processes text line by line and prints any lines which match a specified pattern**

##wc:
**"short for word count" reads either standard input or a list of files and generates one or more of the following statistics: newline count, word count, and byte count**

###Searching and pipes (grep, wc)
`curl -L 'https://tinyurl.com/zeyq9vc' | grep searchWord | wc -l`
`curl -L 'https://tinyurl.com/zeyq9vc' | grep -c searchWord`

##alias:
**Allows you to create short names for commands.**
`alias ll='ls -la'`

> [bashrcgenerator]: http://bashrcgenerator.com/ > [bash.academy]: https://www.bash.academy/ > [Bash Guide for Beginners]: http://www.tldp.org/LDP/Bash-Beginners-Guide/html/ > [BASH Programming - Introduction HOW-TO]: http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html > [regexr]: https://regexr.com/
