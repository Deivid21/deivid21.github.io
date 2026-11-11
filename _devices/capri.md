---
codename: capri
name: "Moto G10"
aka: ["Moto G10 Power", "Lenovo K13 Note"]
vendor: Motorola
common: sm6225
platform: sm4250
soc: "Snapdragon 460"
android: 17
order: 13
maintained: true

roms:
  - name: Evolution X
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g10-moto-g10-power-capri.4733239/
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    type: test
    android: 17
    version: "24.0"
    status: active
    date: 2026-11-11
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261111-UNOFFICIAL-capri/lineage-24.0-20261111-UNOFFICIAL-capri.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-24.0-20261111-UNOFFICIAL-capri
    sha256: "82b89e51ae096879aa6220590e5335fc54ed00a98b440cff86ef89f46e91445e"
    filesize: "1.43 GB"
    security_patch: November 2026
    gapps: true
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g10-moto-g10-power-capri.4733239/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261111-UNOFFICIAL-capri/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261111-UNOFFICIAL-capri/dtbo.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261111-UNOFFICIAL-capri/vbmeta.img
      - name: vbmeta_system.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261111-UNOFFICIAL-capri/vbmeta_system.img
      - name: vendor_boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261111-UNOFFICIAL-capri/vendor_boot.img
    notes: "Test build: November 2026 security patch, SELinux enforcing, GApps (MindTheGapps) included, Linux kernel 4.19.325-cip136 and a fix for the screen sometimes staying black and not turning off properly after locking. Also odm partition, dalvik heap and LMKD settings per RAM variant, blurs available (off by default), Moto Camera 4 built from prebuilt source and libaidenoiser for the camera."
    notes_es: "Build de prueba: parche de seguridad de noviembre de 2026, SELinux enforcing, GApps (MindTheGapps) incluidas, kernel Linux 4.19.325-cip136 y corrección de la pantalla que a veces quedaba en negro y no se apagaba bien al bloquear. Además: partición odm, ajustes de dalvik heap y LMKD según la variante de RAM, blurs disponibles (desactivados por defecto), Moto Camera 4 compilada desde prebuilts y libaidenoiser para la cámara."
  - name: LineageOS
    archived: true
    android: 16
    version: "23.2"
    status: discontinued
    date: 2026-10-08
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261008-nightly-capri-signed/lineage-23.2-20261008-nightly-capri-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-23.2-20261008-nightly-capri-signed
    sha256: "932cd8826f79e2d8d9d31fa2422f9880711e39c624c25adb21f0132718241abe"
    filesize: "1.03 GB"
    security_patch: September 2026
    gapps: false
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g10-moto-g10-power-capri.4733239/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261008-nightly-capri-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261008-nightly-capri-signed/dtbo.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261008-nightly-capri-signed/vbmeta.img
      - name: vbmeta_system.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261008-nightly-capri-signed/vbmeta_system.img
      - name: vendor_boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261008-nightly-capri-signed/vendor_boot.img
    notes: "Last official LineageOS 23.2 nightly build (signed): September 2026 security patch, SELinux enforcing. No longer updated."
    notes_es: "Última nightly oficial de LineageOS 23.2 (firmada): parche de seguridad de septiembre de 2026, SELinux enforcing. Ya no se actualiza."
  - name: LineageOS
    archived: true
    android: 15
    version: "22.2"
    status: discontinued
    date: 2025-10-09
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251009-nightly-capri-signed/lineage-22.2-20251009-nightly-capri-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-22.2-20251009-nightly-capri-signed
    sha256: "b3ed21fba1cf2a9f4a318e39940bce209f1498fef0fcccac39a1c5928610bbbd"
    filesize: "0.96 GB"
    security_patch: October 2025
    gapps: false
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g10-moto-g10-power-capri.4733239/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251009-nightly-capri-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251009-nightly-capri-signed/dtbo.img
      - name: super_empty.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251009-nightly-capri-signed/super_empty.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251009-nightly-capri-signed/vbmeta.img
      - name: vendor_boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251009-nightly-capri-signed/vendor_boot.img
    notes: "Last official LineageOS 22.2 nightly build (signed): October 2025 security patch, SELinux enforcing. No longer updated."
    notes_es: "Última nightly oficial de LineageOS 22.2 (firmada): parche de seguridad de octubre de 2025, SELinux enforcing. Ya no se actualiza."
---
