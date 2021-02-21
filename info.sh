#!/bin/bash

VERSION="1.0.5"
LICENSE_URL="github.com/virtualvivek/react-windows-ui/blob/master/LICENSE"
FRAMEWORK_RESOURCE="https://github.com/virtualvivek/react-windows-ui/releases/latest"
CREATE_ISSUE="https://github.com/virtualvivek/react-windows-ui/issues/new"
CLONE_REPO="https://github.com/virtualvivek/react-windows-ui.git"
DEMO_URL="https://virtualvivek.github.io/react-windows-ui/"
WEBSITE="https://virtualvivek.github.io/react-windows-ui/"

echo "#================================================================"
echo "#                     react-windows-ui"
echo "#================================================================"

echo "#================================================================"
echo "#-    IMPLEMENTATION"
echo "#-    version         ${VERSION}"
echo "#-    author          Vivek Verma"
echo "#-    copyright       Copyright (c) http://www.github.com"
echo "#-    license         MIT License"
echo "#-    license url     ${LICENSE_URL}"
echo "#-"
echo "#================================================================"

echo "#%    OPTIONS"
echo "#%    \$show --info                    Print framework resource information"
echo "#%    \$show --version                 Print script information"

show(){

while [ $# -gt 0 ];
do
    case $1 in
    --version)
        echo "# -----------------------------------------------------------"
        echo "-version : ${VERSION}"
        echo "-resource: ${FRAMEWORK_RESOURCE}"
        echo "# -----------------------------------------------------------"
        ;;
    --info)
        echo "# -----------------------------------------------------------"
        echo "-clone repo    : ${CLONE_REPO}"
        echo "-open an issue : ${CREATE_ISSUE}"
        echo "-live demo     : ${DEMO_URL}"
        echo "-website       : ${WEBSITE}"
        ;;
    # [4-6])
    #     echo "some other cases"
    #     ;;
    # [7,9])
    #     echo "some more other cases"
    #     ;;
    # *)
    #     echo "others"
    #     ;;
    esac
    shift
done

}


