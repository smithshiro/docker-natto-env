# Natto ENV
Natto is healthy

## Description

Natto ENV is the minimum configuration to launch the environment of ServerlessFramework and have a sample code of websocket.

## Getting Started

### Dependencies
* It worked on MacOS in my environment. I'm not sure about Linux and Windows.
* Installation of docker and docker-compose is required.

### Installing
1. Move to the project directory
2. Run `docker-compose up`
3. Connect to Websocket by `wscat -c 'ws://localhost:3334?userId={userId}&roomSlug={roomSlug}'`
## Authors
shiro => [Blog](https://shiro-secret-base.com)

## Version History
* 0.1
    * Initial Release
