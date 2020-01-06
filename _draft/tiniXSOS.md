


```console 

cd /srv/tftp

cp /usr/lib/PXELINUX/pxelinux.0  ./

cp /run/live/persistence/sdb1/ld* ./

cp /boot/vmlinuz-4.19.0-6-amd64 ./

cp /boot/initrd.img-4.19.0-6-amd64 ./

ln -s vmlinuz-4.19.0-6-amd64 vmlinuz
ln -s initrd.img-4.19.0-6-amd64 initrd.img

mkdir pxelinux.cfg

cd pxelinux.cfg

nano default

```

copiar e  incollare :

```
inserire il testoo...

```

creare la condivisione in rete del file system sqauash ...




attivare server TFTP

`systemctl start tftpd-hpa`

