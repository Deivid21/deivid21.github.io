---
title: Install a ROM
description: Clean install from stock firmware.
order: 2
devices: [all]
per_device: true
updated: 2026-11-14
title_es: Instalar una ROM
description_es: Instalación limpia desde firmware stock.
---

{% assign install_devices = "" | split: "" %}
{% for d in site.devices %}{% assign d_released = d.roms | where_exp: "r", "r.released != false" %}{% if site.data.install[d.codename] and d_released.size > 0 and d.stage != "coming-soon" %}{% assign install_devices = install_devices | push: d %}{% endif %}{% endfor %}
{% assign install_devices = install_devices | sort: "name" %}

<div data-lang="en" markdown="1">

> **Warning:** a clean install wipes all your data. Back up everything you want to keep first.

## Requirements

- Unlocked bootloader ([how to unlock it](../unlock-bootloader/))
- [Platform tools](https://developer.android.com/tools/releases/platform-tools) (adb and fastboot)
- Stock firmware on your phone: you can install it with Motorola's [Software Fix](https://en-us.support.motorola.com/app/softwarefix) tool (Windows only)

</div>

<div data-lang="es" markdown="1">

> **Advertencia:** una instalación limpia borra todos tus datos. Respalda primero todo lo que quieras conservar.

## Requisitos

- Bootloader desbloqueado ([cómo desbloquearlo](../unlock-bootloader/))
- [Platform tools](https://developer.android.com/tools/releases/platform-tools) (adb y fastboot)
- Firmware stock en el teléfono: puedes instalarlo con la herramienta [Software Fix](https://en-us.support.motorola.com/app/softwarefix) de Motorola (solo Windows)

</div>

<div class="install-pick">
  <h2><span data-lang="en">Your device</span><span data-lang="es">Tu dispositivo</span></h2>
  <select id="install-device" aria-label="Device">
    <option value="" data-i18n="install_pick">Choose your device…</option>
    {% for d in install_devices %}<option value="{{ d.codename }}">{{ d.name }} ({{ d.codename }})</option>
    {% endfor %}
  </select>
  <p class="muted" data-install-pick><span data-lang="en">The steps below change with your device: pick it to see its exact commands.</span><span data-lang="es">Los pasos cambian según tu dispositivo: elígelo para ver sus comandos exactos.</span></p>
</div>

<div data-install-steps hidden>
<div data-lang="en">
  <h2>Steps</h2>
  <ol>
    <li>From your device page, download the ROM zip and these images: <strong data-install-files></strong>.</li>
    <li>Reboot to fastboot:
      <pre class="code"><code>adb reboot bootloader</code></pre></li>
    <li>Flash the images and the recovery:
      <pre class="code install-cmds"><code></code></pre></li>
    <li>In the bootloader menu, select <strong>Recovery mode</strong> with the volume keys and confirm with the power key.</li>
    <li>In the recovery, go to <strong>Factory reset → Format data / factory reset</strong>.</li>
    <li>Go back, choose <strong>Apply update → Apply from ADB</strong> and send the ROM from your PC:
      <pre class="code"><code>adb sideload rom.zip</code></pre></li>
    <li>When it finishes, choose <strong>Reboot system now</strong>.</li>
  </ol>
</div>
<div data-lang="es">
  <h2>Pasos</h2>
  <ol>
    <li>Desde la página de tu dispositivo, descarga el zip de la ROM y estas imágenes: <strong data-install-files></strong>.</li>
    <li>Reinicia en fastboot:
      <pre class="code"><code>adb reboot bootloader</code></pre></li>
    <li>Flashea las imágenes y el recovery:
      <pre class="code install-cmds"><code></code></pre></li>
    <li>En el menú del bootloader, elige <strong>Recovery mode</strong> con los botones de volumen y confirma con el de encendido.</li>
    <li>En el recovery, ve a <strong>Factory reset → Format data / factory reset</strong>.</li>
    <li>Vuelve, elige <strong>Apply update → Apply from ADB</strong> y envía la ROM desde tu PC:
      <pre class="code"><code>adb sideload rom.zip</code></pre></li>
    <li>Cuando termine, elige <strong>Reboot system now</strong>.</li>
  </ol>
</div>
</div>

<script id="install-data" type="application/json">{{ site.data.install | jsonify }}</script>
