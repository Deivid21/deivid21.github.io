---
codename: rhodep
name: "Moto G82 5G"
aka: ["Moto G71s"]
vendor: Motorola
common: sm6375
platform: sm6375
soc: "Snapdragon 695"
android: 17
order: 22
maintained: true

roms:
  - name: Evolution X
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g82-5g-moto-g71s-rhodep.4808884/
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    type: test
    android: 17
    version: "24.0"
    status: active
    date: 2026-11-16
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261116-UNOFFICIAL-rhodep/lineage-24.0-20261116-UNOFFICIAL-rhodep.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-24.0-20261116-UNOFFICIAL-rhodep
    sha256: "4d333fdf68538318246283c66a69994398eede74b775e8311eba2d09b40a8da3"
    filesize: "1.47 GB"
    security_patch: November 2026
    gapps: true
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g82-5g-moto-g71s-rhodep.4808884/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261116-UNOFFICIAL-rhodep/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261116-UNOFFICIAL-rhodep/dtbo.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261116-UNOFFICIAL-rhodep/vbmeta.img
      - name: vbmeta_system.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261116-UNOFFICIAL-rhodep/vbmeta_system.img
      - name: vendor_boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261116-UNOFFICIAL-rhodep/vendor_boot.img
    notes: "Test build: November 2026 security patch, SELinux enforcing, GApps (MindTheGapps) included and Linux kernel 5.4.302. Also odm partition, dalvik heap and LMKD settings per RAM variant, Fluence NN audio processing disabled, Moto Camera 4 built from prebuilt source and missing camera libraries added. Screen density set to 420, properties and overlays for rhodep variants and more sampling rates for VoIP audio."
    notes_es: "Build de prueba: parche de seguridad de noviembre de 2026, SELinux enforcing, GApps (MindTheGapps) incluidas y kernel Linux 5.4.302. Además: partición odm, ajustes de dalvik heap y LMKD según la variante de RAM, procesamiento de audio Fluence NN desactivado, Moto Camera 4 compilada desde prebuilts y librerías de cámara que faltaban. Densidad de pantalla en 420, propiedades y overlays para las variantes de rhodep y más frecuencias de muestreo para audio VoIP."
  - name: LineageOS
    archived: true
    android: 16
    version: "23.2"
    status: discontinued
    date: 2026-10-04
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261004-nightly-rhodep-signed/lineage-23.2-20261004-nightly-rhodep-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-23.2-20261004-nightly-rhodep-signed
    sha256: "4702e23dec6de1c57a36a0fd4b94ceb0968b7f3cd36ecc0ed6e186a55c0d464d"
    filesize: "1.09 GB"
    security_patch: September 2026
    gapps: false
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261004-nightly-rhodep-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261004-nightly-rhodep-signed/dtbo.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261004-nightly-rhodep-signed/vbmeta.img
      - name: vbmeta_system.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261004-nightly-rhodep-signed/vbmeta_system.img
      - name: vendor_boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261004-nightly-rhodep-signed/vendor_boot.img
    notes: "Last official LineageOS 23.2 nightly build (signed): September 2026 security patch, SELinux enforcing. No longer updated."
    notes_es: "Última nightly oficial de LineageOS 23.2 (firmada): parche de seguridad de septiembre de 2026, SELinux enforcing. Ya no se actualiza."
  - name: LineageOS
    archived: true
    android: 15
    version: "22.2"
    status: discontinued
    date: 2025-10-05
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251005-nightly-rhodep-signed/lineage-22.2-20251005-nightly-rhodep-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-22.2-20251005-nightly-rhodep-signed
    sha256: "2f13d74260add9b6627567feb9a30876253c99a653527709c42ef1c9316af26a"
    filesize: "1.03 GB"
    security_patch: September 2025
    gapps: false
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251005-nightly-rhodep-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251005-nightly-rhodep-signed/dtbo.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251005-nightly-rhodep-signed/vbmeta.img
      - name: vbmeta_system.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251005-nightly-rhodep-signed/vbmeta_system.img
      - name: vendor_boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251005-nightly-rhodep-signed/vendor_boot.img
    notes: "Last official LineageOS 22.2 nightly build (signed): September 2025 security patch, SELinux enforcing. No longer updated."
    notes_es: "Última nightly oficial de LineageOS 22.2 (firmada): parche de seguridad de septiembre de 2025, SELinux enforcing. Ya no se actualiza."
---
