## What's this project?
This is a product display for customers

## Check if you have docker installed
```bash
docker --version
```
You should see a something like Docker version xx.xx.x-xx, build xxxxx.
If not you must install docker from [`https://docs.docker.com/install/`](https://docs.docker.com/install/)

## Static html dist
```bash
git clone git@github.com:luzeduardo/sshop
cd sshop
yarn install
yarn run dev
```
Open the index.html inside dist folder

## With docker installed run
```bash
git clone git@github.com:luzeduardo/sshop
cd sshop
make run
```
Access: [`http://127.0.0.1:8001/`](http://127.0.0.1:8001/)

## Unit test
```
npm test
```
