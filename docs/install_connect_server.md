## Install and connect to a VULTR server

### 1 Install server
go to https://my.vultr.com/ and click on `deploy new server`

### 2 Connect through ssh

#### 2.1 Linux users
Use this command on your console. IP needs to be replaces by the ip of the server.

	ssh -o IdentitiesOnly=yes  -o ServerAliveInterval=60 root@IP

#### 2.2 Windows users

##### 2.2.1 Download and install PuTTY
https://the.earth.li/~sgtatham/putty/latest/w64/putty-64bit-0.76-installer.msi

##### 2.2.1 connect through PuTTY
https://www.hostinger.com/tutorials/how-to-use-putty-ssh


### 3 Authenticate
Once connected to the instance it will require you to enter a password. which you will find in the instance panel.
Enter the password and you are connected to the server
