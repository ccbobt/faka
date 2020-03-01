# IDeeY发卡系统


## 简介
> IDeeY发卡系统，定位于个人业务，对接目前主流支持个人收款的接口，可用于个人出售一些虚拟商品，比如点卡/会员卡/激活码等。


## 技术栈
> ### 后端:
>> 采用 node.js + express + mongodb   （源码中的server目录）
> ###  管理后端:
>> 采用 vue + element （源码中的admin目录）
> ### 商品PC端：
>> 采用 vue + element (源码中的web目录)
> ### 商品移动端：
>> 采用 vue + vant-ui  (源码中的mobile目录)
___

## 后端环境搭建:
> 后端不是常见的php+mysql环境，是node.js + mongodb环境。
 ### 简易node安装 (以下安装在centOS7.2上测试ok，更多环境请自行搜索搞定,也类似)，
> [node安装参考教程](https://www.cnblogs.com/Logan626/p/11191894.html)
>> 1. 用ssh登陆自己的主机，假定为root用户，登陆之后目录在 /root
>> 2. 在node.js的官网，找到适用于centOS的文件,选LTS下面的Linux Binaries (x64)项目下的64位，右键点击复制连接 
>> 3. 在主机上:  `wget https://nodejs.org/dist/v12.16.1/node-v12.16.1-linux-x64.tar.xz`
>> 4. 解压文件 : `tar -xvf node-v12.16.1-linux-x64.tar.xz`
>> 5. 文件夹名改短点-方便 `mv node-v12.16.1-linux-x64 node-v12`  ,移动到local目录 ` mv node-v12 /usr/local/` (非必须，为了方便统一管理)
>> 6. 编辑系统配置文件 `vim /etc/profile`
>> 7. 在这个文件的最下面加入:`export PATH=/usr/local/node-v12/bin:$PATH` (具体路径看你把node-v12放到哪里了,做相应修改),保存退出。关于vim的使用请自行搜索，很简单，或是在宝塔下面操作也方便。
>> 8. 使修改生效 `source /etc/profile` 
>> 9. 测试 `node -v`及`npm -v`，分别输出:  `v12.16.1`,`6.13.4`,安装成功。
___
> node的二进制包安装总结就是三步,各种教程也都是如此(编译安装不算)
>> 1. 下载，解压，把文件放到某个熟悉的地方
>> 2. 把文件夹中bin目录中的node  npm 等命令放到系统变量中，这样运行时才可以找到。这里有两种方法:
>>> + 用软连接ln -s把bin下面这些命令连接到当前的环境变量目录中，比如/usr/bin中。
>>> + 修改/etc/profile文件，在其中把bin整个目录都加入到环境变量，我推荐这个法子，因为以后使用node时可能这个目录会增加别的命令，比如现在还有有npx。这样就不用为每个命令单独软连接。
>> 3. 使用环境变量生效，测试ok


 ### mongodb数据库的安装: [官方安装教程点此](https://docs.mongodb.com/master/tutorial/install-mongodb-on-red-hat/)  注意选当前最新稳定版本为4.2
> #### 上面的官方教程中有各种Linux系统下的安装方式，翻译一下很明白。以下为centOS上的简易说明：
>> 1. 创建mongodb的yum源文件 `vim /etc/yum.repos.d/mongodb-org-4.2.repo`
>> 2. 在里面输入以下内容，并保存退出
>>> ```
>>> [mongodb-org-4.2]
>>> name=MongoDB Repository
>>> baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.2/x86_64/
>>> gpgcheck=1
>>> enabled=1
>>> gpgkey=https://www.mongodb.org/static/pgp/server-4.2.asc
>>> ```
>> 3. 安装： `sudo yum install -y mongodb-org`
>> 4. 安装之后 启动: `sudo systemctl start mongod`
>> 5. 开机启动:   `sudo systemctl enable mongod`
>> 6. 另外的一些操作命令,停止:`sudo systemctl stop mongod`
>> 7. 查看mongodb是否启动成功,服务端口是否打开： `ss -ntl`,如果输出中有` 127.0.0.1:27017`说明服务启动，端口打开.

### nginx的安装
> 如果有宝塔环境,或是lnmp环境，那nginx已经ok了，只要做相应配置。

