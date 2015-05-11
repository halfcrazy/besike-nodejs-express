#!/usr/bin/env node
var mini_harp = require('mini-harp');
var argv = require('minimist')(process.argv.slice(2));
mini_harp(argv._[0],argv.port);
