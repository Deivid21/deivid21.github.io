---
title: Unlock the bootloader
description: Original unlocking method for Motorola devices, needed before installing any ROM.
order: 1
devices: [all]
updated: 2026-11-14
title_es: Desbloquear el bootloader
description_es: Método original de desbloqueo para dispositivos Motorola, necesario antes de instalar cualquier ROM.
---

<div data-lang="en" markdown="1">

> **Warning:** unlocking the bootloader **erases all data** on your phone. Back up everything you want to keep first.

You only need to do this once per device.

## Requirements

- A Motorola or Google account to sign in to the Motorola unlock page
- [Platform tools](https://developer.android.com/tools/releases/platform-tools) (adb and fastboot) on your PC
- Battery charged to at least 60%
- A device sold unlocked: some carrier versions can't be unlocked

## Steps

1. Enable **Developer options**: go to **Settings → About phone** and tap **Build number** 7 times.
2. In **Settings → System → Developer options**, turn on **OEM unlocking** and **USB debugging**.
   If OEM unlocking is greyed out, keep the phone connected to the internet for a few days and try again.
3. Connect the phone to your PC and reboot to fastboot:
   ```bash
   adb reboot bootloader
   ```
4. Check that the phone is detected, then ask it for its unlock data:
   ```bash
   fastboot devices
   fastboot oem get_unlock_data
   ```
5. Join the lines it prints into **one single line**: drop the `(bootloader)` prefixes and all spaces.
6. Open the [Motorola unlock page](https://motorola-global-portal.custhelp.com/app/standalone/bootloader/unlock-your-device-a), sign in, paste the line, check that your device can be unlocked, accept the terms and request the key. Motorola sends the **unlock key** by email.
7. Unlock with the key from the email:
   ```bash
   fastboot oem unlock UNIQUE_KEY
   ```
   If the phone asks to confirm, run the same command again.
8. Reboot. The phone starts from zero, so turn **USB debugging** on again before installing a ROM.

A warning screen saying the bootloader is unlocked will appear on every boot: that's normal.

</div>

<div data-lang="es" markdown="1">

> **Advertencia:** desbloquear el bootloader **borra todos los datos** del teléfono. Respalda primero todo lo que quieras conservar.

Solo hay que hacerlo una vez por dispositivo.

## Requisitos

- Una cuenta de Motorola o de Google para entrar a la página de desbloqueo de Motorola
- [Platform tools](https://developer.android.com/tools/releases/platform-tools) (adb y fastboot) en tu PC
- Batería cargada al menos al 60%
- Un equipo liberado: algunas versiones de operadora no se pueden desbloquear

## Pasos

1. Activa las **Opciones de desarrollador**: ve a **Ajustes → Acerca del teléfono** y toca **Número de compilación** 7 veces.
2. En **Ajustes → Sistema → Opciones de desarrollador**, activa **Desbloqueo OEM** y **Depuración USB**.
   Si el desbloqueo OEM aparece en gris, deja el teléfono conectado a internet unos días y vuelve a intentarlo.
3. Conecta el teléfono al PC y reinicia en fastboot:
   ```bash
   adb reboot bootloader
   ```
4. Comprueba que el teléfono se detecta y pídele sus datos de desbloqueo:
   ```bash
   fastboot devices
   fastboot oem get_unlock_data
   ```
5. Une las líneas que muestra en **una sola línea**: quita los prefijos `(bootloader)` y todos los espacios.
6. Abre la [página de desbloqueo de Motorola](https://motorola-global-portal.custhelp.com/app/standalone/bootloader/unlock-your-device-a), inicia sesión, pega la línea, verifica que tu equipo se puede desbloquear, acepta los términos y solicita la clave. Motorola envía la **clave de desbloqueo** por correo.
7. Desbloquea con la clave del correo:
   ```bash
   fastboot oem unlock CLAVE_UNICA
   ```
   Si el teléfono pide confirmar, ejecuta el mismo comando otra vez.
8. Reinicia. El teléfono parte de cero, así que vuelve a activar la **Depuración USB** antes de instalar una ROM.

En cada encendido aparecerá una pantalla avisando que el bootloader está desbloqueado: es normal.

</div>
