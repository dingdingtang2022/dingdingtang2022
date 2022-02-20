#!/bin/bash
# 使用go 实现，跨平台，env，flag

# 要查找的文件所在目录
FilePath=./assets

# 在哪个目录下查找（递归）
FindPath=./

# 查找的文件列表
FILES=$(find $FilePath -type f)

# 遍历文件列表
for FILE in $FILES
do
    # 文件名包含空格时有bug
    filename=$(basename "$FILE")
    # echo "查找的文件：$FILE，查找的文件名，不包含路径：$filename"
    if [[ "$filename" != "" ]];then
        # 在查找目录下搜索是否包含该文件名
        # --exclude-dir={.git,tmp,runtime} --exclude=\*.{log,md}
        grep -riq "$filename" --exclude-dir={.history,.git,tmp} --exclude=\*.{log,md} $FindPath
        if [[ $? != 0 ]]; then
            echo $FILE $filename
        fi
    fi
done