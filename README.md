# ChatM8

ChatM8 is an information security challenge in the Web category, and was presented to participants of [KAF CTF 2019](https://ctf.kipodafterfree.com)

## Challenge story

Admin chats with many friends.

## Challenge exploit

Multiple server endpoints allow a user to inject message IDs to their chat, and an endpoint exposes all message IDs. (Including Admin's)

## Challenge solution

Message ID injection for the whole message chain.

## Building and installing

[Clone](https://github.com/NadavTasher/2019-ChatM8/archive/master.zip) the repository, then type the following command to build the container:
```bash
docker build . -t chatm8
```

To run the challenge, execute the following command:
```bash
docker run --rm -d -p 1020:80 chatm8
```

## Usage

You may now access the challenge interface through your browser: `http://localhost:1020`

## Flag

Flag is:
```flagscript
KAF{H4d_107s_0f_v3r5ionz___much_v3r510nz_5uch_m1gr4n3}
```

## License
[MIT License](https://choosealicense.com/licenses/mit/)