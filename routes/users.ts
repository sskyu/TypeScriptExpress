/**
 * Created by sskyu on 2014/06/27.
 */

/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../api_defines/users.d.ts" />

import express = require('express');

var router = new express.Router();

router.get('/', function (req: express.Request, res: express.Response) {
    // TODO: findAll実装する

    var userList: MyApp.IUserList = {
        list: [
            {
                code: 'u1',
                nickname: 'user1',
                level: 10,
                message: 'hello world',
                fuga: 'piyo'
            },
            {
                code: 'u2',
                nickname: 'user2',
                level: 8,
                message: 'Hi!'
            }
        ]
    };

    res.json(userList);
});

router.get('/:id', function (req: express.Request, res: express.Response) {
    // TODO: findById実装する

    var id = req.params.id;

    var user: MyApp.IUser = {
        code: 'u1',
        nickname: 'user1',
        level: 10,
        message: 'hello world'
    };

    res.json(user);
});

router.post('/', function (req: express.Request, res: express.Response) {
    // TODO: insert実装する

    res.send('users response create');
});

router.put('/:id', function (req: express.Request, res: express.Response) {
    // TODO: update実装する

    var id = req.params.id;

    res.send('users response update. id: ' + id);
});

router.delete('/:id', function (req: express.Request, res: express.Response) {
    // TODO: delete実装する

    var id = req.params.id;

    res.send('users response destroy. id: ' + id);
});

export = router;
