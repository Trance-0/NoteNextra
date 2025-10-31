# Music 1260 Jazz Theory I

> [!TIP]
>
> In most of the time, it is sufficient to get a 60% with minimal effort so that you can focus on the more important things.
>
> Especially, for a course that you currently don't have time to learn.

We will try to debunk the entire jazz theory in this notes, used for self-learning.

I will try to formulate the jazz theory in a way that **I** can understand.

## Basics of 7th chords

It is a enumeration over the 7 notes of the scale with step size 2 (tritone, the musician like to call it the 3rd but that don't make sense to me).

You can pick any using this simple function:

```python
scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
def get_7th_chord(root, scale):
    return [scale[(root + i*2) % 7] for i in range(7)]
```

There are some stupid math going on here since the scale is not uniform in a mathematical sense, you need to know that `E-F` and `B-C` are 1 half step apart where others are 2 half steps (they call whole step) apart.

This results in stupid math like this:

```python
chromatic_scale = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
note_value = {e:i for i, e in enumerate(chromatic_scale)}
def get_number_of_half_steps(note1, note2):
    return min(abs(note_value[note1] - note_value[note2]), 12 - abs(note_value[note1] - note_value[note2]))
```

You can construct this table in exam for simple counting.

| Note\Note | **A** | A# | **B** | **C** | C# | **D** | D# | **E** | **F** | F# | **G** | G# |
|-----------|---|----|---|---|-----|---|-----|---|----|----|---|-----|
| **A**         | 0 | 1  | 2 | 3 | 4   | 5 | 6   | 7 | 8  | 9  | 10| 11  |
| A#        | 1 | 0  | 1 | 2 | 3   | 4 | 5   | 6 | 7  | 8  | 9 | 10  |
| **B**         | 2 | 1  | 0 | 1 | 2   | 3 | 4   | 5 | 6  | 7  | 8 | 9   |
| **C**         | 3 | 2  | 1 | 0 | 1   | 2 | 3   | 4 | 5  | 6  | 7 | 8   |
| C#        | 4 | 3  | 2 | 1 | 0   | 1 | 2   | 3 | 4  | 5  | 6 | 7   |
| **D**         | 5 | 4  | 3 | 2 | 1   | 0 | 1   | 2 | 3  | 4  | 5 | 6   |
| D#        | 6 | 5  | 4 | 3 | 2   | 1 | 0   | 1 | 2  | 3  | 4 | 5   |
| **E**         | 7 | 6  | 5 | 4 | 3   | 2 | 1   | 0 | 1  | 2  | 3 | 4   |
| **F**         | 8 | 7  | 6 | 5 | 4   | 3 | 2   | 1 | 0  | 1  | 2 | 3   |
| F#        | 9 | 8  | 7 | 6 | 5   | 4 | 3   | 2 | 1  | 0  | 1 | 2   |
| **G**         | 10| 9  | 8 | 7 | 6   | 5 | 4   | 3 | 2  | 1  | 0 | 1   |
| G#        | 11| 10 | 9 | 8 | 7   | 6 | 5   | 4 | 3  | 2  | 1 | 0   |

They use different names for interval types, resulting in a more consistent naming scheme for the chords types.

| Interval | Number of Half Steps | Short Name |
|---------------|----------------------|------|
| Augumented    | 5                    | *+ |
| Major          | 4                    | *M |
| Minor          | 3                    | *m |
| Diminished     | 2                    | *dim |

_the `*` denotes the root note_

Thanks god you already pass the first exam so you don't need to make distinction between this notation and the major minor stuff for describing the interval types.

But you still need to take these names to consider:

| Interval sequence | Name | Short Name | Even shorter|
|-------|-------|---------------|------|
| (4,4,3) | Major-Augmented 7th | Augmented 7th | *M7#5 |
| (4,3,4) | Major-Major 7th | Major 7th | *M7|
| (4,3,3) | Major-Minor 7th | Dominant 7th | *7|
| (3,4,4) | Minor-Major 7th | Minor-Major 7th | *mM7|
| (3,4,3) | Minor-Minor 7th | Minor 7th | *m7|
| (3,3,4) | Diminished-Minor 7th | Half Diminished 7th | *m7b5|
| (3,3,3) | Diminished-Diminished 7th | Fully Diminished 7th | *dim7|

_the `*` denotes the root note_

So we can construct the basic 7th chords like this, take the simplest example, C major 7th chord:

| Chord | Notes | Interval Type | Short Name | Even shorter|
|-------|-------|---------------|------|------|
| I     | C, E, G, B | (4,3,4) Major-Major 7th | Major 7th | CM |
| ii    | D, F, A, C | (3,4,3) Minor-Minor 7th | Minor 7th | Dm |
| iii   | E, G, B, D | (3,4,3) Minor-Minor 7th | Minor 7th | Em |
| IV    | F, A, C, E | (4,3,4) Major-Major 7th | Major 7th | FM |
| V     | G, B, D, F | (4,3,3) Major-Minor 7th | Dominant 7th | G7 |
| vi    | A, C, E, G | (3,4,3) Minor-Major 7th | Minor 7th | Am |
| $\text{vii}^\circ$   | B, D, F, A | (3,3,4) Diminished-Minor 7th | Diminished 7th | Bdim7 |

## Primary Chords

Given the home key, the primary chords are the chords that are built on the 1st, 4th, and 5th degrees of the scale.

For example, in C major scale, the primary chords are:

| Chord | Notes | Interval Type | Short Name | Even shorter|
|-------|-------|---------------|------|------|
| I     | C, E, G, B | (4,3,4) Major-Major 7th | Major 7th | CM |
| IV    | F, A, C, E | (4,3,4) Major-Major 7th | Major 7th | FM |
| V     | G, B, D, F | (4,3,3) Major-Minor 7th | Dominant 7th | G7 |

### Diatonic median substitution

Diatonic median substitution is a technique that allows you to substitute a **primary chord** with a **secondary chord** or vice versa.

Formula is given by belows:

```python
def diatonic_median_substitution(primary_chord):
    # if primary_chord.roman_numeral == 'I':
    #     return ['iii','vi'] # +2, -2
    # elif primary_chord.roman_numeral == 'IV':
    #     return ['vi','ii'] # +2, -2
    # elif primary_chord.roman_numeral == 'V':
    #     return ['vii','iii'] # +2, -2
    if primary_chord.is_primary_chord():
        # consider the addition is defined and modulo 7 (number of keys in scale)
        return [primary_chord._chord_key_shift(note=2), primary_chord._chord_key_shift(note=-2)]
    else:
        raise ValueError(f"Invalid primary chord: {primary_chord}")
```

## Secondary Chords

Given the home key, the secondary chords are the chords that are built on the 2nd, 3rd, and 6th degrees of the scale.

For example, in C major scale, the secondary chords are:

| Chord | Notes | Interval Type | Short Name | Even shorter|
|-------|-------|---------------|------|------|
| ii    | D, F, A, C | (3,4,3) Minor-Minor 7th | Minor 7th | Dm |
| iii   | E, G, B, D | (3,4,3) Minor-Minor 7th | Minor 7th | Em |
| vi    | A, C, E, G | (3,4,3) Minor-Major 7th | Minor 7th | Am |

## Basis of Tonality, or key center

ii-V-I

is a classical chord progression, we will play a lot with this mathematically nonsense later.

## Secondary Dominant Chords

Deduction of the secondary dominant chords from the primary chords.

Every major minor chord has a secondary dominant chord. (that means $\text{vii}^\circ$ chord don't have a secondary dominant chord)

We can construct the secondary dominant chords from the primary chords by subtracting 2 half steps from the root note, the do a dominant 7th chord based on that.

Or equivalently, consider the root notes for the 7th chord, denote as `r`, and then pick the V chord based on major of `r`.

```python
def secondary_dominant_chord(primary_chord):
    return _construct_chord(root=primary_chord._chord_key_shift(half_steps=-2), interval_type=(4,3,3)) # Using major-minor (dominant) as interval type
```

List of secondary dominant chords:

Assume we build chord on C major scale.

| Chord | Name | Notes | Secondary Dominant Chord | Name | Notes |
|-------|-------|------|-------|-------|------|
| I     | CM     | C, E, G, B | V    | G7     | G, B, D, F |
| ii    | Dm     | D, F, A, C | V/ii    | A7    | A, C#, E, G |
| iii    | Em     | E, G, B, D | V/iii    | B7    | B, D#, F#, A |
| IV    | FM     | F, A, C, E | V/IV    | C7    | C, E, G, **Bb** (keep consistency with the interval) |
| V     | G7     | G, B, D, F | V/V     | D7    | D, F#, A, C |
| vi    | Am     | A, C, E, G | V/vi    | E7    | E, G#, B, D |

### Companion ii chord with secondary dominant chords

#### Companion ii chord with secondary dominant chords for major quality chords

IV and V chords have companion ii chords.

Should always be the **minor quality ii chord**.

For example, in C major scale, the companion ii chord for IV chord (FM) is Gm, and the companion ii chord for V chord (G7) is Am.

| Chord | Name | Notes | Companion ii Chord | Name | Notes |
|-------|-------|------|-------|-------|------|
| IV    | FM     | F, A, C, E | ii/IV    | Gm     | G, Bb, D, F |
| V     | G7     | G, B, D, F | ii/V    | Am     | A, C, E, G |

#### Companion ii chord with secondary dominant chords for minor quality chords

ii, iii, vi have companion ii chords.

Should always be the **diminished-minor quality ii chord**.

For example, in C major scale, the companion ii chord for ii chord (Dm) is Em7b5, and the companion ii chord for iii chord (Em) is Fm7b5.

| Chord | Name | Notes | Companion ii Chord | Name | Notes |
|-------|-------|------|-------|-------|------|
| ii    | Dm     | D, F, A, C | ii/ii    | Em7b5     | E, G, Bb, D |
| iii    | Em     | E, G, B, D | ii/iii    | Fm7b5     | F, G#, C, D# |
| vi    | Am     | A, C, E, G | ii/vi    | Bm7b5     | B, D, F, A |

## Tritone Substitution

A tritone is the M3 and m7 of a dominant 7th chord. (6 half steps, or 3 whole steps)

Consider the dominant 7th chord, G7 (G, B, D, F), the tritone is B and F, so we can some how flip the order of the note to derive a new dominant 7th quality chord.

To find such chord, we align the remaining note as desired.

Example: G7 (G, **B**, D, **F**) -> Db7 (Db, **F**, Abb, **Cb**) (keep consistency with the interval (4,3,3))

| Primary Chord | Secondary Dominant Chord | Key for secondary dominant chord | Tritone Substituted Secondary Dominant Chord | Key for tritone substituted secondary dominant chord |
|-------|-------|-------|-------|-------|
| CM     | G7     | G, **B**, D, **F** | Db7    | Db, **F**, Abb, **Cb** |
| Dm     |  A7    | A, **C#**, E, **G** | Eb7    | Eb, **G**, Bb, **Db** |
| Em     |  B7    | B, **D#**, F#, **A** | F7    | F, **A**, C, **D#** |
| FM     |  C7    | C, **E**, G, **Bb**| F#7    | F#, **A#**, C#, **E** |
| G7     |  D7    | D, **F#**, A, **C** | G#7    | G#, **B**, D#, **F#** |
| Am     | E7    | E, **G#**, B, **D** | A#7    | A#, **C#**, E#, **G#** |

### Tritone Substitution for secondary dominant chords

Using the same strategy, but carefully list the key for the secondary dominant chord.

### Companion ii chord with tritone substituted secondary dominant chords

The same, just consider the secondary dominant chord as the V chord and derive what is the companion ii chord for it.

## Modal borrowing

Use notes from parallel minor scale to construct the chords.

|Major|C|D|E|F|G|A|B|
|-----|---|---|---|---|---|---|---|
|Parallel Natural Minor|C|D|Eb|F|G|Ab|Bb|
|Parallel Harmonic Minor|C|D|Eb|F|G|Ab|B|
|Parallel Melodic Minor|C|D|Eb|F|G|A|B|

### From parallel natural minor

#### Primary, secondary dominant chords in parallel natural minor

Rewrite the key for chords in major to minor.

#### Companion ii chord with tritone substituted secondary dominant chords in parallel natural minor

### From parallel harmonic minor

#### Primary, secondary dominant chords in parallel harmonic minor

#### Companion ii chord with tritone substituted secondary dominant chords in parallel harmonic minor

### From parallel melodic minor

#### Primary, secondary dominant chords in parallel melodic minor

#### Companion ii chord with tritone substituted secondary dominant chords in parallel melodic minor
