---
codename: fogos
name: "Moto G34 5G"
aka: ["Moto G34s", "Moto G45 5G"]
vendor: Motorola
common: sm6375
platform: sm6375
soc: "Snapdragon 695 / Snapdragon 6s Gen 3"
android: 17
order: 27
maintained: true

roms:
  - name: Evolution X
    released: false
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g34-5g-moto-g45-5g-fogos.4808812/
    # version: ""
    # status: active      # active | discontinued
    # date: 2026-11-03
  - name: LineageOS
    type: test
    android: 17
    version: "24.0"
    status: active
    date: 2026-11-16
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261116-UNOFFICIAL-fogos/lineage-24.0-20261116-UNOFFICIAL-fogos.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-24.0-20261116-UNOFFICIAL-fogos
    sha256: "584cdbf49a940db4a2a94b62819532fd886ee731bddc11d6f1772971a69e4976"
    filesize: "1.56 GB"
    security_patch: November 2026
    gapps: true
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g34-5g-moto-g45-5g-fogos.4808812/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261116-UNOFFICIAL-fogos/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261116-UNOFFICIAL-fogos/dtbo.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261116-UNOFFICIAL-fogos/vbmeta.img
      - name: vbmeta_system.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261116-UNOFFICIAL-fogos/vbmeta_system.img
      - name: vendor_boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-24.0-20261116-UNOFFICIAL-fogos/vendor_boot.img
    notes: "Test build: November 2026 security patch, SELinux enforcing, GApps (MindTheGapps) included and Linux kernel 5.4.302. Also odm partition, dalvik heap and LMKD settings per RAM variant, Fluence NN audio processing disabled, Moto Camera 4 built from prebuilt source and missing camera libraries added. Missing ANC blobs for the camera, SKU properties set for all partitions and Fluence NN audio mixer paths removed."
    notes_es: "Build de prueba: parche de seguridad de noviembre de 2026, SELinux enforcing, GApps (MindTheGapps) incluidas y kernel Linux 5.4.302. Además: partición odm, ajustes de dalvik heap y LMKD según la variante de RAM, procesamiento de audio Fluence NN desactivado, Moto Camera 4 compilada desde prebuilts y librerías de cámara que faltaban. Blobs ANC de cámara que faltaban, propiedades de SKU para todas las particiones y rutas de audio Fluence NN eliminadas."
  - name: LineageOS
    archived: true
    android: 16
    version: "23.2"
    status: discontinued
    date: 2026-10-10
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261010-nightly-fogos-signed/lineage-23.2-20261010-nightly-fogos-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-23.2-20261010-nightly-fogos-signed
    sha256: "568b7cf6bdb4359efae38a54be2207c02b7ba5a8c662cc728044f77d6531e52f"
    filesize: "1.14 GB"
    security_patch: October 2026
    gapps: false
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g34-5g-moto-g45-5g-fogos.4808812/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261010-nightly-fogos-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261010-nightly-fogos-signed/dtbo.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261010-nightly-fogos-signed/vbmeta.img
      - name: vbmeta_system.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261010-nightly-fogos-signed/vbmeta_system.img
      - name: vendor_boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-23.2-20261010-nightly-fogos-signed/vendor_boot.img
    notes: "Last official LineageOS 23.2 nightly build (signed): October 2026 security patch, SELinux enforcing. No longer updated. Unmodified official nightly, mirrored for archival."
    notes_es: "Última nightly oficial de LineageOS 23.2 (firmada): parche de seguridad de octubre de 2026, SELinux enforcing. Ya no se actualiza. Nightly oficial sin modificar, respaldada como archivo."
  - name: LineageOS
    archived: true
    android: 15
    version: "22.2"
    status: discontinued
    date: 2025-10-11
    download: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251011-nightly-fogos-signed/lineage-22.2-20251011-nightly-fogos-signed.zip
    changelog: https://github.com/Deivid21/RELEASES/releases/tag/lineage-22.2-20251011-nightly-fogos-signed
    sha256: "1e4de418fe5cb04767de8a3ecc629dbe0c0cbcb55b757d1d8eb8e44f5be5c5e9"
    filesize: "1.08 GB"
    security_patch: October 2025
    gapps: false
    forum: https://xdaforums.com/t/rom-17-official-lineageos-24-0-for-moto-g34-5g-moto-g45-5g-fogos.4808812/
    files:
      - name: boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251011-nightly-fogos-signed/boot.img
      - name: dtbo.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251011-nightly-fogos-signed/dtbo.img
      - name: vbmeta.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251011-nightly-fogos-signed/vbmeta.img
      - name: vbmeta_system.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251011-nightly-fogos-signed/vbmeta_system.img
      - name: vendor_boot.img
        url: https://github.com/Deivid21/RELEASES/releases/download/lineage-22.2-20251011-nightly-fogos-signed/vendor_boot.img
    notes: "Last official LineageOS 22.2 nightly build (signed): October 2025 security patch, SELinux enforcing. No longer updated. Unmodified official nightly, mirrored for archival."
    notes_es: "Última nightly oficial de LineageOS 22.2 (firmada): parche de seguridad de octubre de 2025, SELinux enforcing. Ya no se actualiza. Nightly oficial sin modificar, respaldada como archivo."
---
