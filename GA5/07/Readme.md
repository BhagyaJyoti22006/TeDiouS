1. Open the current directory in WSL environment.

2. Run the following two commands to install and init `lxd`:  
`sudo snap install lxd`  
`sudo lxd init --auto`

3. Run the following commands to add `USER` to `lxd` group to avoid typing `sudo` everytime:  
`sudo usermod -aG lxd $USER`  
`newgrp lxd`

4. Type the following commands one by one in the exact order specified:  
`mkdir -p /tmp/tds-lxd-canary`  
`echo -n "TDS_LXD_CANARY_ed961cfa7a17b559276ff4f70a0ea83ec196c073" > /tmp/tds-lxd-canary/f8f736cc9ca6.txt`  
`lxc delete -f sandbox-test 2>/dev/null || true`  
`lxc init ubuntu:22.04 sandbox-test`  
`lxc config set sandbox-test limits.memory 256MB`  
`lxc config device add sandbox-test eth0 none`  
`lxc start sandbox-test`  
`sleep 3`  
`lxc file push lxd-sandbox-probe.sh sandbox-test/root/`  
`lxc exec sandbox-test -- bash /root/lxd-sandbox-probe.sh > sandbox.log 2>&1`  
`lxc delete -f sandbox-test`

5. Open the newly created file `sandbox.log`. Remove any lines not starting with `LXD_`.

6. Copy the contents of `sandbox.log`. This is the required log.


Combined stdout+stderr log:-  
```
LXD_SANDBOX_START token=lxd_ff08ad4f73cf905de2da11a921ef724994c2d33ef71547e7
LXD_FS_ATTEMPT path=/tmp/tds-lxd-canary/f8f736cc9ca6.txt
LXD_FS_BLOCKED status=1
LXD_NET_ATTEMPT token=lxd_ff08ad4f73cf905de2da11a921ef724994c2d33ef71547e7
LXD_NET_DONE status=6
LXD_RESOURCE_ATTEMPT allocation_mb=1152 spin_seconds=7
LXD_RESOURCE_LIMIT_HIT status=137
LXD_SANDBOX_END token=lxd_ff08ad4f73cf905de2da11a921ef724994c2d33ef71547e7
```

