---
codename: milanf
name: "Moto G Stylus 5G (2022)"
vendor: Motorola
common: sm6375
platform: sm6375
soc: "Snapdragon 695"
android: 17
order: 21
maintained: true

roms:
  - name: Evolution X
    released: false
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g-stylus-5g-2022-milanf.4808881/
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    type: test
    android: 17
    version: "24.0"
    status: active
    date: 2026-11-13
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261113-UNOFFICIAL-milanf/lineage-24.0-20261113-UNOFFICIAL-milanf.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-24.0-20261113-UNOFFICIAL-milanf
    sha256: "d180d0c908a17a86bf01e2245ae3f67b8cff9ab6dc4ccf21d8b12354ed371a23"
    filesize: "1.52 GB"
    security_patch: November 2026
    gapps: true
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g-stylus-5g-2022-milanf.4808881/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261113-UNOFFICIAL-milanf/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261113-UNOFFICIAL-milanf/dtbo.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261113-UNOFFICIAL-milanf/vbmeta.img
      - name: vbmeta_system.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261113-UNOFFICIAL-milanf/vbmeta_system.img
      - name: vendor_boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261113-UNOFFICIAL-milanf/vendor_boot.img
    notes: "Test build: November 2026 security patch, SELinux enforcing, GApps (MindTheGapps) included and Linux kernel 5.4.302. Also odm partition, dalvik heap and LMKD settings per RAM variant, Moto Camera 4 built from prebuilt source and missing camera libraries added. Blobs updated to T2SDS33.75-38-1-3-30, screen density set to 420, vidhance components patched and missing Fluence NN audio mixer paths added."
    notes_es: "Build de prueba: parche de seguridad de noviembre de 2026, SELinux enforcing, GApps (MindTheGapps) incluidas y kernel Linux 5.4.302. Además: partición odm, ajustes de dalvik heap y LMKD según la variante de RAM, Moto Camera 4 compilada desde prebuilts y librerías de cámara que faltaban. Blobs actualizados a T2SDS33.75-38-1-3-30, densidad de pantalla en 420, componentes vidhance parcheados y rutas de audio Fluence NN que faltaban."
  - name: LineageOS
    archived: true
    android: 16
    version: "23.2"
    status: discontinued
    date: 2026-10-08
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261008-nightly-milanf-signed/lineage-23.2-20261008-nightly-milanf-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-23.2-20261008-nightly-milanf-signed
    sha256: "0ffae8c83a64078e36b23dc279298e3826d84055f350fe4e3c9184ae29cc02f0"
    filesize: "1.09 GB"
    security_patch: September 2026
    gapps: false
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261008-nightly-milanf-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261008-nightly-milanf-signed/dtbo.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261008-nightly-milanf-signed/vbmeta.img
      - name: vbmeta_system.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261008-nightly-milanf-signed/vbmeta_system.img
      - name: vendor_boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261008-nightly-milanf-signed/vendor_boot.img
    notes: "Last official LineageOS 23.2 nightly build (signed): September 2026 security patch, SELinux enforcing. No longer updated."
    notes_es: "Última nightly oficial de LineageOS 23.2 (firmada): parche de seguridad de septiembre de 2026, SELinux enforcing. Ya no se actualiza."
  - name: LineageOS
    archived: true
    android: 15
    version: "22.2"
    status: discontinued
    date: 2025-10-09
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251009-nightly-milanf-signed/lineage-22.2-20251009-nightly-milanf-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-22.2-20251009-nightly-milanf-signed
    sha256: "799b3948576b0e1c491fd52d47fee257d4903083c5d2ea591098a60e0f98047f"
    filesize: "1.03 GB"
    security_patch: October 2025
    gapps: false
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251009-nightly-milanf-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251009-nightly-milanf-signed/dtbo.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251009-nightly-milanf-signed/vbmeta.img
      - name: vbmeta_system.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251009-nightly-milanf-signed/vbmeta_system.img
      - name: vendor_boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251009-nightly-milanf-signed/vendor_boot.img
    notes: "Last official LineageOS 22.2 nightly build (signed): October 2025 security patch, SELinux enforcing. No longer updated."
    notes_es: "Última nightly oficial de LineageOS 22.2 (firmada): parche de seguridad de octubre de 2025, SELinux enforcing. Ya no se actualiza."
---
