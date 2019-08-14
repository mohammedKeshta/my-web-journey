#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Apr 28 23:56:48 2019

@author: melzanaty
"""
# https://www.twilio.com/docs/libraries/python
# https://github.com/twilio/twilio-python
# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACe32a567e61e9452420959e012312312asd349'
auth_token = '42ef1b52e7492538185ca5ab3a0asdf123'
client = Client(account_sid, auth_token)

message = client.messages \
                .create(
                    body="Mohammed Elzanaty here",
                    from_='+2010030951243',  # replace with twilio number
                    to='+2010030951243'
                )

print(message.sid)
