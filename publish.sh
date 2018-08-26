#!/bin/bash

rm -rf docs/*
cp -R dist/* docs
git add docs/*

