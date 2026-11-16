---
title: How to update a ROM
description: Update to a newer build of the same ROM, keeping your data.
order: 3
devices: [all]
needs_build: true
image: /assets/img/guides/update-rom.svg
updated: 2026-11-16
title_es: Cómo actualizar una ROM
description_es: Actualiza a una build más nueva de la misma ROM, sin perder tus datos.
---

<div data-lang="en" markdown="1">

> **Before you start:** an update keeps your data, but it's always a good idea to back up first.

This only works between builds of the **same ROM and the same build type**: official to official, or test to test. Switching to another ROM, or between official and test builds, needs a [clean install](../install-rom/).

## Requirements

- The ROM already installed on your phone
- [Platform tools](https://developer.android.com/tools/releases/platform-tools) (adb) on your PC
- The new ROM zip from your device page

## Official builds

Official LineageOS builds update by themselves: go to **Settings → System → Updater**, download the new build and tap **Install**. The phone reboots when it's done.

## Test builds and manual updates

1. Turn on **USB debugging** in **Developer options**, connect the phone and reboot to recovery:
   ```bash
   adb reboot recovery
   ```
2. In the recovery, choose **Apply update → Apply from ADB** and send the new ROM from your PC:
   ```bash
   adb -d sideload rom.zip
   ```
3. When it finishes, choose **Reboot system now**.

Don't format data: that would erase everything, and an update doesn't need it.

</div>

<div data-lang="es" markdown="1">

> **Antes de empezar:** una actualización conserva tus datos, pero siempre conviene respaldar primero.

Esto solo funciona entre builds de la **misma ROM y del mismo tipo**: oficial a oficial, o de prueba a de prueba. Cambiar a otra ROM, o entre builds oficiales y de prueba, requiere una [instalación limpia](../install-rom/).

## Requisitos

- La ROM ya instalada en el teléfono
- [Platform tools](https://developer.android.com/tools/releases/platform-tools) (adb) en tu PC
- El zip de la nueva ROM, desde la página de tu dispositivo

## Builds oficiales

Las builds oficiales de LineageOS se actualizan solas: ve a **Ajustes → Sistema → Actualizador**, descarga la nueva build y toca **Instalar**. El teléfono se reinicia al terminar.

## Builds de prueba y actualización manual

1. Activa la **Depuración USB** en las **Opciones de desarrollador**, conecta el teléfono y reinicia en recovery:
   ```bash
   adb reboot recovery
   ```
2. En el recovery, elige **Apply update → Apply from ADB** y envía la nueva ROM desde tu PC:
   ```bash
   adb -d sideload rom.zip
   ```
3. Cuando termine, elige **Reboot system now**.

No formatees los datos: borraría todo y una actualización no lo necesita.

</div>
