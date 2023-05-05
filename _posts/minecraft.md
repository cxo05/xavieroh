---
title: "Setup Modded Minecraft Server"
excerpt: "Using Tlauncher for minecraft and runs through some router networking for the server"
date: "2023-05-05"
---

# Minecraft

Guide to getting minecraft and setting up a server

### Setup Minecraft

1. Download [Tlauncher](https://tlauncher.org/en/)
2. Open Tlauncher ![](/images/tlauncher.webp)
3. Select a version or download a modpack via TLMODS
4. Enter the game

### Setup Minecraft Server

1. Download [java runtime environment 8](https://www.oracle.com/java/technologies/downloads/) and confirm you have it installed. Default location is `C:\Program Files\Java\jre1.8.0_321\bin\`
2. Download the files of a [modded](https://www.curseforge.com/minecraft/modpacks) or [vanilla](https://www.minecraft.net/en-us/download/server) server
3. Follow instructions to setup the server (Accept eula etc.)

#### Networking

1. Create windows firewall rules to allow all connections
   1. Inbound TCP and UDP port 25565
   2. Outbound TCP and UDP port 25565
   3. Java.exe
2. Setup static IP for the computer hosting the server

   1. Open control panel and change network adapter properties ![](/images/static_ip.webp)

      `IP address` The static ip you want to use (Change only the last number) The first 3 numbers is the same as the default gateway

      `Default gateway` Your router's ip address (If you navigate to it on the browser, you will see your router's login page)

3. Port forward on router (Port forward on your modem too if it is an optical network router)
   1. Example: ASUS Router ![](/images/port_forward.webp)
4. Run the server
5. Check if the port (25565) is open [here](https://www.portchecktool.com/). The IP address you see is the one used to connect to the server outside your local network.
