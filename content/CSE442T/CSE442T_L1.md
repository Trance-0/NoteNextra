# CSE442T Introduction to Cryptography (Lecture 1)

## Chapter 1: Introduction

### Alice sending information to Bob

Assuming _Eve_ can always listen

Rule 1. Message, Encryption to Code and Decryption to original Message.

### Kerckhoffs' principle

It states that the security of a cryptographic system shouldn't rely on the secrecy of the algorithm (Assuming Eve knows how everything works.)

**Security is due to the security of the key.**

### Private key encryption scheme

Let $M$ be the set of message that Alice will send to Bob. (The message space) "plaintext"

Let $K$ be the set of key that will ever be used. (The key space)

$Gen$ be the key generation algorithm.

$k\gets Gen(K)$

$c\gets Enc_k(m)$ denotes cipher encryption.

$m'\gets Dec_k(c')$ $m'$ might be null for incorrect $c'$.

$P[k\gets K:Dec_k(Enc_k(M))=m]=1$ The probability of decryption of encrypted message is original message is 1.

*_in some cases we can allow the probability not be 1_

### Some examples of crypto system

Let $M=\text{all five letter strings}$.

And $K=[1,10^{10}]$

Example:

$P[k=k']=\frac{1}{10^{10}}$

$Enc_{1234567890}("brion")="brion1234567890"$

$Dec_{1234567890}(brion1234567890)="brion"$

Seems not very secure but valid crypto system.

### Early attempts for crypto system

#### Caesar cipher

$M=\text{finite string of texts}$

$K=[1,26]$

$Enc_k=[(i+K)\% 26\ for\ i \in m]=c$

$Dec_k=[(i+26-K)\% 26\ for\ i \in c]$

```python
def caesar_cipher_enc(s: str, k:int):
    return ''.join([chr((ord(i)-ord('a')+k)%26+ord('a')) for i in s])

def caesar_cipher_dec(s: str, k:int):
    return ''.join([chr((ord(i)-ord('a')+26-k)%26+ord('a')) for i in s])
```

#### Substitution cipher

$M=\text{finite string of texts}$

$K=\text{set of all bijective linear transformations (for English alphabet},|K|=26!\text{)}$

$Enc_k=[iK\ for\ i \in m]=c$

$Dec_k=[iK^{-1}\ for\ i \in c]$

Fails to frequency analysis

#### Vigenere Cipher

$M=\text{finite string of texts with length }m$

$K=\text{[0,26]}^n$ (assuming English alphabet)

```python
def viginere_cipher_enc(s: str, k: List[int]):
    res=''
    n,m=len(s),len(k)
    j=0
    for i in s:
        res+=caesar_cipher_enc(i,k[j])
        j=(j+1)%m
    return res

def viginere_cipher_dec(s: str, k: List[int]):
    res=''
    n,m=len(s),len(k)
    j=0
    for i in s:
        res+=caesar_cipher_dec(i,k[j])
        j=(j+1)%m
    return res
```

#### One time pad

Completely random string, sufficiently long.

$M=\text{finite string of texts with length }n$

$K=\text{[0,26]}^n$ (assuming English alphabet)$

$Enc_k=m\oplus k$

$Dec_k=c\oplus k$

```python
def one_time_pad_enc(s: str, k: List[int]):
    return ''.join([chr((ord(i)-ord('a')+k[j])%26+ord('a')) for j,i in enumerate(s)])

def one_time_pad_dec(s: str, k: List[int]):
    return ''.join([chr((ord(i)-ord('a')+26-k[j])%26+ord('a')) for j,i in enumerate(s)])
```
