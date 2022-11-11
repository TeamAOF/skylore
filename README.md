# Skylore

A Skylands RPG pack with unique land generation and RPG Elements.

##### Table of Contents  
- [Setup](https://github.com/TeamAOF/skylore#setup)  
    - [CurseForge App (Windows / Mac)](https://github.com/TeamAOF/skylore#curseforge-app-windows--mac)
    - [MultiMC / PrismLauncher)](https://github.com/TeamAOF/skylore#multimc--prismlauncher)
      - [Windows](https://github.com/TeamAOF/skylore#windows)
      - [Linux](https://github.com/TeamAOF/skylore#linux)
# Setup
Follow the instructions below to get your workspace setup:

## CurseForge App (Windows / Mac)
1. Download the [CurseForge App](https://curseforge.overwolf.com/) and [Git](https://git-scm.com/downloads) if you haven't already.

2. Fork and clone the repository to the Instances folder of the CurseForge App, the default path is `C:\Users\{UserName}\Documents\Curseforge\Minecraft\Instances`.

* Note: If you've previously used the Twitch App the path will most likely be `C:\Users\{UserName}\Documents\Twitch\Minecraft\Instances`.
3. Double click the script InstanceSyncSetup.bat to setup InstanceSync. It is found in the automation folder.

4. Open the CurseForge App and you should see the modpack. If you already had CurseForge App open, restart it.

You're done!


## MultiMC / PrismLauncher
### Windows
1. Open PowerShell as Admin
![open powershell as admin](setup/images/powershelladmin.png)

2. Run **Set-ExecutionPolicy -ExecutionPolicy Bypass** command
![run command](setup/images/run-command.png)

3. Type **A** and press ENTER
![sya yes](setup/images/say-yes-to-all.png)

4. Download the latest windows relase:
    https://github.com/TeamAOF/skylore/releases

5. Import to MultiMC/Prism Launcher with the import from the ZIP option, wait until done installing.

You're done!

### Linux

1. install **jq**

    debian / ubuntu
    ```sudo apt-get install jq```

    fedora
    ```sudo dnf install jq```

    openSUSE
    ```sudo zypper install jq```

    arch
    ```sudo pacman -S jq```
2. Download the latest linux relase:
    https://github.com/TeamAOF/skylore/releases
3. Import to MultiMC/Prism Launcher with the import from the ZIP option, wait until done installing.
