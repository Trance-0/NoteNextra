import random
import time

def partition(A,p,r):
    x=A[r]
    lo,hi=p,r-1
    for i in range(p,r):
        if A[i]<x:
            A[lo],A[i]=A[i],A[lo]
            lo+=1
    A[lo],A[r]=A[r],A[lo]
    return lo

def quicksort(A,p,r):
    if p<r:
        q=partition(A,p,r)
        quicksort(A,p,q-1)
        quicksort(A,q+1,r)

def randomized_partition(A,p,r):
    ix=random.randint(p,r)
    x=A[ix]
    A[r],A[ix]=A[ix],A[r]
    lo=p
    for i in range(p,r):
        if A[i]<x:
            A[lo],A[i]=A[i],A[lo]
            lo+=1
    A[lo],A[r]=A[r],A[lo]
    return lo

def randomized_quicksort(A,p,r):
    if p<r:
        q=randomized_partition(A,p,r)
        randomized_quicksort(A,p,q-1)
        randomized_quicksort(A,q+1,r)

def merge_sort(A,p,r):
    def merge(A,p,q,r):
        L=A[p:q+1]
        R=A[q+1:r+1]
        i,j=0,0
        for k in range(p,r+1):
            if i==len(L):
                A[k:r+1]=R[j:]
                break
            elif j==len(R):
                A[k:r+1]=L[i:]
                break
            else:
                if L[i]<R[j]:
                    A[k]=L[i]
                    i+=1
                else:
                    A[k]=R[j]
                    j+=1
    if p<r:
        q=(p+r)//2
        merge_sort(A,p,q)
        merge_sort(A,q+1,r)
        merge(A,p,q,r)

def radix_sort(A,b=10):
    buckets=[[] for _ in range(b)]
    m=max(A)
    exp=1
    while m//exp>0:
        for i in range(len(A)):
            digit=(A[i]//exp)%b
            buckets[digit].append(A[i])
        A=[]
        for bucket in buckets:
            A.extend(bucket)
        exp*=b
    return A

if __name__=="__main__":
    C=[random.randint(0,10000000) for _ in range(100000)]
    A=C.copy()
    start=time.time()
    Ao=sorted(A)
    end=time.time()
    print(f"Time taken: for built-in sort {end-start} seconds")
    A=C.copy()
    start=time.time()
    randomized_quicksort(A,0,len(A)-1)
    end=time.time()
    print(A==Ao)
    print(f"Time taken: for randomized quicksort {end-start} seconds")
    A=C.copy()
    start=time.time()
    quicksort(A,0,len(A)-1)
    end=time.time()
    print(A==Ao)
    print(f"Time taken: for quicksort {end-start} seconds")
    A=C.copy()
    start=time.time()
    merge_sort(A,0,len(A)-1)
    end=time.time()
    print(A==Ao)
    print(f"Time taken: for merge sort {end-start} seconds")
    A=C.copy()
    start=time.time()
    radix_sort(A)
    end=time.time()
    print(A==Ao)
    print(f"Time taken: for radix sort {end-start} seconds")

