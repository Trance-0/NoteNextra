# CSE361S Week 1 (Compact Version)

## Conservation of Bits

What you get is what you assigned.

### Signed and Unsigned

- Signed: The most significant bit is the sign bit.
  - Two's complement: Range is from -2^(w-1) to 2^(w-1) - 1.
  - Created by `int i = -1;`
- Unsigned: The most significant bit is the value bit.
  - Range is from 0 to 2^w - 1.
  - Created by `unsigned int i = 1;` or `int i = 1U;`

During the conversion, the binary representation of the number is the same.

For example, `-1` in signed is `0b11111111` in signed. and `0b11111111` in signed is `255` in unsigned.

Any arithmetic operation in signed and unsigned follows the same rules. `0b00000000` is `0` in signed and unsigned. and `0-1=255` in unsigned but `-1` in signed. (The binary representation of `-1` in signed is `0b11111111` and `0b11111111` is `255` in unsigned.)

### Shift Operations

- Logical Shift: Shift the bits and fill in the new bits with 0. (used for unsigned numbers)
- Arithmetic Shift: Shift the bits and fill in the new bits with the sign bit. (used for signed numbers)

## Bytes

### Byte Ordering

For Example: `0x12345678`

- Little Endian: The least significant byte is stored at the lowest address.  
  - `0x78` is stored at the lowest address.
- Big Endian: The most significant byte is stored at the lowest address.
  - `0x12` is stored at the lowest address.

### Representing Strings

- `char *str = "12345";`

In memory, it is stored as `0x31 0x32 0x33 0x34 0x35` with terminating null character `0x00`.
