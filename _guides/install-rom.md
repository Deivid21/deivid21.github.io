---
title: Install a ROM
description: Clean install from stock firmware.
order: 2
devices: [all]
updated: 2026-11-14
title_es: Instalar una ROM
description_es: Instalación limpia desde firmware stock.
---

<div data-lang="en" markdown="1">

> **Warning:** unlocking the bootloader wipes all your data.

## Requirements

- Unlocked bootloader ([how to unlock it](../unlock-bootloader/))
- [Platform tools](https://developer.android.com/tools/releases/platform-tools) (adb and fastboot)
- Stock firmware on your phone: you can install it with Motorola's [Software Fix](https://en-us.support.motorola.com/app/softwarefix) tool (Windows only)

## Steps

1. Reboot to fastboot:
   ```bash
   adb reboot bootloader
   ```
2. Flash the recovery:
   ```bash
   fastboot flash boot recovery.img
   ```
3. Boot into recovery, format data and sideload the ROM:
   ```bash
   adb sideload rom.zip
   ```
4. Reboot to system.

</div>

<div data-lang="es" markdown="1">

> **Advertencia:** desbloquear el bootloader borra todos tus datos.

## Requisitos

- Bootloader desbloqueado ([cómo desbloquearlo](../unlock-bootloader/))
- [Platform tools](https://developer.android.com/tools/releases/platform-tools) (adb y fastboot)
- Firmware stock en el teléfono: puedes instalarlo con la herramienta [Software Fix](https://en-us.support.motorola.com/app/softwarefix) de Motorola (solo Windows)

## Pasos

1. Reinicia en fastboot:
   ```bash
   adb reboot bootloader
   ```
2. Flashea el recovery:
   ```bash
   fastboot flash boot recovery.img
   ```
3. Entra al recovery, formatea data y aplica la ROM por sideload:
   ```bash
   adb sideload rom.zip
   ```
4. Reinicia el sistema.

</div>
