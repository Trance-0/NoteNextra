from math import gcd

def euclidean_algorithm(a,b):
    if a<b: return euclidean_algorithm(b,a)
    if b==0: return a
    return euclidean_algorithm(b,a%b)

def get_generator(p):
    """
    p should be a prime
    """
    f=3
    g=[]
    for i in range(1,p):
        sg=[]
        step=p
        k=i
        while k!=1 and step>0:
            if k==0:
                break
                # raise ValueError(f"Damn, {i} generates 0 for group {p}")
            sg.append(k)
            k=(k**f)%p
            step-=1
        sg.append(1)
        # if len(sg)!=(p-1): continue
        g.append((i,[j for j in sg]))
    return g

def __list_print(arr):
    for i in arr:print(i)

def factorization(n):
    # Pollard's rho integer factorization algorithm
    # https://stackoverflow.com/questions/32871539/integer-factorization-in-python
    factors = []

    def get_factor(n):
        x_fixed = 2
        cycle_size = 2
        x = 2
        factor = 1

        while factor == 1:
            for count in range(cycle_size):
                if factor > 1: break
                x = (x * x + 1) % n
                factor = gcd(x - x_fixed, n)

            cycle_size *= 2
            x_fixed = x

        return factor

    while n > 1:
        next = get_factor(n)
        factors.append(next)
        n //= next

    return factors

if __name__=='__main__':
    print(euclidean_algorithm(285,(10**9+7)*5))
    __list_print(get_generator(23))
    print(factorization(162000))