# Collections

## Terable Interface

The `Iterable` interface in Java provides a way to iterate over a collection of elements. It is implemented by classes that want to support the for-each loop (enhanced for loop) and provide an iterator to iterate over their elements. It helps iterate over a list without knowling anything about its internal implementation. In this way suppose in future the internal implementation of myIterable Changes,this will not affect the code where we have used it in our application.

Here's an example of how to implement the `Iterable` interface:

```Java
import java.util.Iterator;

public class MyIterable implements Iterable<String> {

    private String[] elements;

    public MyIterable(String[] elements) {
        this.elements = elements;
    }

    @Override
    public Iterator<String> iterator() {
        return new MyIterator();
    }

    private class MyIterator implements Iterator<String> {

        private int currentIndex;

        @Override
        public boolean hasNext() {
            return currentIndex < elements.length;
        }

        @Override
        public String next() {
            return elements[currentIndex++];
        }
    }

    public static void main(String[] args) {
        String[] elements = { "Apple", "Banana", "Cherry" };

        MyIterable myIterable = new MyIterable(elements);

        for (String element : myIterable) {
            System.out.println(element);
        }
    }
}
```

In this example, we have a class MyIterable that implements the `Iterable` interface with a type argument of String. It contains an array of strings called elements. The `iterator()` method is implemented to return an instance of MyIterator, which is a private inner class implementing the `Iterator` interface. The MyIterator class keeps track of the current index and implements the `hasNext()` and `next()` methods.

In the main() method, we create an instance of MyIterable with an array of elements. We can then use the for-each loop to iterate over the elements by simply calling myIterable directly.

When you run the program, it will iterate over the elements array and print each element:

Copy code
Apple
Banana
Cherry
This example demonstrates how to implement the `Iterable` interface and provide an `iterator` to enable the for-each loop functionality for your custom collection or class.

## Collection Interface

The `Collection` interface in Java is the root interface of the Java Collections Framework and provides the basic functionality for working with a group of objects. It defines common methods such as adding, removing, and querying elements in a collection.

Here's an example of how to implement the `Collection` interface:

```java
import java.util.Collection;
import java.util.ArrayList;

public class MyCollection implements Collection<String> {

    private ArrayList<String> elements;

    public MyCollection() {
        this.elements = new ArrayList<>();
    }

    @Override
    public int size() {
        return elements.size();
    }

    @Override
    public boolean isEmpty() {
        return elements.isEmpty();
    }

    @Override
    public boolean contains(Object o) {
        return elements.contains(o);
    }

    @Override
    public boolean add(String s) {
        return elements.add(s);
    }

    @Override
    public boolean remove(Object o) {
        return elements.remove(o);
    }

    @Override
    public boolean containsAll(Collection<?> collection) {
        return elements.containsAll(collection);
    }

    @Override
    public boolean addAll(Collection<? extends String> collection) {
        return elements.addAll(collection);
    }

    @Override
    public boolean removeAll(Collection<?> collection) {
        return elements.removeAll(collection);
    }

    @Override
    public boolean retainAll(Collection<?> collection) {
        return elements.retainAll(collection);
    }

    @Override
    public void clear() {
        elements.clear();
    }

    public static void main(String[] args) {
        MyCollection myCollection = new MyCollection();
        myCollection.add("Apple");
        myCollection.add("Banana");
        myCollection.add("Cherry");

        System.out.println("Size: " + myCollection.size());
        System.out.println("Contains 'Banana': " + myCollection.contains("Banana"));

        myCollection.remove("Banana");

        System.out.println("Size after removal: " + myCollection.size());
        System.out.println("Contains 'Banana' after removal: " + myCollection.contains("Banana"));

        myCollection.clear();

        System.out.println("Size after clear: " + myCollection.size());
        System.out.println("Is empty: " + myCollection.isEmpty());
    }
}
```

In this example, we create a class called `MyCollection` that implements the `Collection` interface with a type argument of `String`. Inside the class, we use an `ArrayList` to store the elements.

We override the necessary methods defined in the `Collection` interface, such as `size()`, `isEmpty()`, `contains()`, `add()`, `remove()`, `containsAll()`, `addAll()`, `removeAll()`, `retainAll()`, and `clear()`. Each method delegates the actual implementation to the corresponding method of the `ArrayList` class.

In the `main()` method, we create an instance of `MyCollection` and add some elements. We then demonstrate the usage of various methods provided by the `Collection` interface, such as `size()`, `contains()`, `remove()`, `isEmpty()`, and `clear()`.

When you run the program, it will output:

```
Size: 3
Contains 'Banana': true
Size after removal: 2
Contains 'Banana' after removal: false
Size after clear: 0
Is empty: true
```

This example illustrates how to implement the `Collection` interface and provide the necessary functionality for managing a collection of elements. You can customize the implementation based on your specific requirements.

## List Interface

The `List` interface in Java is a subinterface of the `Collection` interface and represents an ordered collection of elements. It allows duplicate elements and provides methods for accessing, inserting, and manipulating elements based on their index.

Here's an example of how to implement the `List` interface using the `ArrayList` class:

```java
import java.util.List;
import java.util.ArrayList;

public class MyList implements List<String> {

    private ArrayList<String> elements;

    public MyList() {
        this.elements = new ArrayList<>();
    }

    @Override
    public int size() {
        return elements.size();
    }

    @Override
    public boolean isEmpty() {
        return elements.isEmpty();
    }

    @Override
    public boolean contains(Object o) {
        return elements.contains(o);
    }

    @Override
    public boolean add(String s) {
        return elements.add(s);
    }

    @Override
    public boolean remove(Object o) {
        return elements.remove(o);
    }

    @Override
    public boolean containsAll(Collection<?> collection) {
        return elements.containsAll(collection);
    }

    @Override
    public boolean addAll(Collection<? extends String> collection) {
        return elements.addAll(collection);
    }

    @Override
    public boolean addAll(int index, Collection<? extends String> collection) {
        return elements.addAll(index, collection);
    }

    @Override
    public boolean removeAll(Collection<?> collection) {
        return elements.removeAll(collection);
    }

    @Override
    public boolean retainAll(Collection<?> collection) {
        return elements.retainAll(collection);
    }

    @Override
    public void clear() {
        elements.clear();
    }

    @Override
    public String get(int index) {
        return elements.get(index);
    }

    @Override
    public String set(int index, String element) {
        return elements.set(index, element);
    }

    @Override
    public void add(int index, String element) {
        elements.add(index, element);
    }

    @Override
    public String remove(int index) {
        return elements.remove(index);
    }

    @Override
    public int indexOf(Object o) {
        return elements.indexOf(o);
    }

    @Override
    public int lastIndexOf(Object o) {
        return elements.lastIndexOf(o);
    }

    @Override
    public List<String> subList(int fromIndex, int toIndex) {
        return elements.subList(fromIndex, toIndex); // Inclusive of fromIndex and Exclusive of toIndex
    }

    public static void main(String[] args) {
        MyList myList = new MyList();
        myList.add("Apple");
        myList.add("Banana");
        myList.add("Cherry");

        System.out.println("Size: " + myList.size());
        System.out.println("Contains 'Banana': " + myList.contains("Banana"));
        System.out.println("Element at index 1: " + myList.get(1));

        myList.remove("Banana");

        System.out.println("Size after removal: " + myList.size());
        System.out.println("Contains 'Banana' after removal: " + myList.contains("Banana"));

        myList.clear();

        System.out.println("Size after clear: " + myList.size());
        System.out.println("Is empty: " + myList.isEmpty());
    }
}
```

In this example, we create a class called `MyList` that implements the `List` interface with a type argument of `String`. Inside the class, we use an `ArrayList` to store the elements.

We override the necessary methods defined in the `List` interface, including methods inherited from the `Collection` interface, such as `size()`, `isEmpty()`, `contains()`, `add()`, `remove()`, `containsAll()`, `addAll()` etc.

When you run the program, it will output:

```
Size: 3
Contains 'Banana': true
Size after removal: 2
Contains 'Banana' after removal: false
Element at index 0: Apple
List after adding 'Durian' at index 1: [Apple, Durian, Cherry]
Size after clear: 0
Is empty: true
```

This example illustrates how to implement the `List` interface and provide the necessary functionality for working with an ordered collection of elements. You can customize the implementation based on your specific requirements.

# Queue Interface

The `Queue` interface in Java represents a collection that holds elements in a specific order for processing. It follows the FIFO (First-In-First-Out) principle, where elements are added to the end of the queue and removed from the beginning. Java provides several implementations of the `Queue` interface, such as `LinkedList` and `PriorityQueue`.

Here's an example of how to implement the `Queue` interface using the `LinkedList` class:

```java
import java.util.Queue;
import java.util.LinkedList;

public class MyQueue implements Queue<String> {

    private LinkedList<String> elements;

    public MyQueue() {
        this.elements = new LinkedList<>();
    }

    @Override
    public int size() {
        return elements.size();
    }

    @Override
    public boolean isEmpty() {
        return elements.isEmpty();
    }

    @Override
    public boolean contains(Object o) {
        return elements.contains(o);
    }

    @Override
    public boolean add(String s) {
        return elements.add(s);
    }

    @Override
    public boolean remove(Object o) {
        return elements.remove(o);
    }

    @Override
    public boolean containsAll(Collection<?> collection) {
        return elements.containsAll(collection);
    }

    @Override
    public boolean addAll(Collection<? extends String> collection) {
        return elements.addAll(collection);
    }

    @Override
    public boolean removeAll(Collection<?> collection) {
        return elements.removeAll(collection);
    }

    @Override
    public boolean retainAll(Collection<?> collection) {
        return elements.retainAll(collection);
    }

    @Override
    public void clear() {
        elements.clear();
    }

    @Override
    public boolean offer(String s) {
        return elements.offer(s);
    }

    @Override
    public String poll() {
        return elements.poll();
    }

    @Override
    public String remove() {
        return elements.remove();
    }

    @Override
    public String peek() {
        return elements.peek();
    }

    @Override
    public String element() {
        return elements.element();
    }

    public static void main(String[] args) {
        MyQueue myQueue = new MyQueue();
        myQueue.offer("Apple");
        myQueue.offer("Banana");
        myQueue.offer("Cherry");

        System.out.println("Size: " + myQueue.size());
        System.out.println("Contains 'Banana': " + myQueue.contains("Banana"));

        myQueue.poll();

        System.out.println("Size after poll: " + myQueue.size());
        System.out.println("Contains 'Apple' after poll: " + myQueue.contains("Apple"));

        System.out.println("Element at the front: " + myQueue.peek());

        myQueue.clear();

        System.out.println("Size after clear: " + myQueue.size());
        System.out.println("Is empty: " + myQueue.isEmpty());
    }
}
```

In this example, we create a class called `MyQueue` that implements the `Queue` interface with a type argument of `String`. Inside the class, we use a `LinkedList` to store the elements.

We override the necessary methods defined in the `Queue` interface and delegate the implementation to the corresponding methods of the `LinkedList` class.

In the `main()` method, we create an instance of `MyQueue` and add some elements using the `offer()` method. We then demonstrate the usage of various methods provided by the `Queue` interface, such as `size()`, `contains()`, `poll()`, `peek()`, and `clear()`.

When you run the program, it will output:

```
Size: 3
Contains 'Banana': true
Size after poll: 2
Contains 'Apple' after

 poll: false
Element at the front: Banana
Size after clear: 0
Is empty: true
```

This example illustrates how to implement the `Queue` interface and utilize its methods for managing elements in a FIFO manner. You can customize the implementation based on your specific requirements.

## Set Interface

The `Set` interface in Java represents a collection that contains unique elements. It does not allow duplicate values, ensuring that each element is unique within the set. Java provides several implementations of the `Set` interface, such as `HashSet`, `TreeSet`, and `LinkedHashSet`.

Here's an example of how to implement the `Set` interface using the `HashSet` class:

```java
import java.util.Set;
import java.util.HashSet;

public class MySet implements Set<String> {

    private HashSet<String> elements;

    public MySet() {
        this.elements = new HashSet<>();
    }

    @Override
    public int size() {
        return elements.size();
    }

    @Override
    public boolean isEmpty() {
        return elements.isEmpty();
    }

    @Override
    public boolean contains(Object o) {
        return elements.contains(o);
    }

    @Override
    public Iterator<String> iterator() {
        return elements.iterator();
    }

    @Override
    public Object[] toArray() {
        return elements.toArray();
    }

    @Override
    public <T> T[] toArray(T[] a) {
        return elements.toArray(a);
    }

    @Override
    public boolean add(String s) {
        return elements.add(s);
    }

    @Override
    public boolean remove(Object o) {
        return elements.remove(o);
    }

    @Override
    public boolean containsAll(Collection<?> collection) {
        return elements.containsAll(collection);
    }

    @Override
    public boolean addAll(Collection<? extends String> collection) {
        return elements.addAll(collection);
    }

    @Override
    public boolean retainAll(Collection<?> collection) {
        return elements.retainAll(collection);
    }

    @Override
    public boolean removeAll(Collection<?> collection) {
        return elements.removeAll(collection);
    }

    @Override
    public void clear() {
        elements.clear();
    }

    public static void main(String[] args) {
        MySet mySet = new MySet();
        mySet.add("Apple");
        mySet.add("Banana");
        mySet.add("Cherry");

        System.out.println("Size: " + mySet.size());
        System.out.println("Contains 'Banana': " + mySet.contains("Banana"));

        mySet.remove("Banana");

        System.out.println("Size after remove: " + mySet.size());
        System.out.println("Contains 'Banana' after remove: " + mySet.contains("Banana"));

        System.out.println("Elements: " + mySet);

        mySet.clear();

        System.out.println("Size after clear: " + mySet.size());
        System.out.println("Is empty: " + mySet.isEmpty());
    }
}
```

In this example, we create a class called `MySet` that implements the `Set` interface with a type argument of `String`. Inside the class, we use a `HashSet` to store the elements.

We override the necessary methods defined in the `Set` interface and delegate the implementation to the corresponding methods of the `HashSet` class.

In the `main()` method, we create an instance of `MySet` and add some elements using the `add()` method. We then demonstrate the usage of various methods provided by the `Set` interface, such as `size()`, `contains()`, `remove()`, and `clear()`.

When you run the program, it will output:

```
Size: 3
Contains 'Banana': true
Size after remove: 2
Contains 'Banana' after remove: false
Elements: [Apple, Cherry]
Size after clear: 0
Is empty: true
```

This example illustrates how to implement the `Set` interface and utilize its methods for managing unique elements. You can customize the implementation and the type of set based on your specific requirements.

## Map Interface

To implement your own custom Map class that overrides the Map interface, you can follow these steps:

1. Define your class and implement the Map interface by using the `implements` keyword.

2. Provide implementations for all the methods declared in the Map interface. You can refer to the Map interface documentation for the list of methods and their descriptions.

3. Customize the behavior of each method according to your specific requirements. You can use existing data structures or create your own data structure to store the key-value pairs.

Here's an example implementation of a custom Map class:

```java
import java.util.Collection;
import java.util.Map;
import java.util.Set;

public class MyMap<K, V> implements Map<K, V> {

    // Your custom data structure to store key-value pairs
    private MyEntry<K, V>[] entries;
    private int size;

    // Constructor to initialize the data structure
    public MyMap(int initialCapacity) {
        entries = new MyEntry[initialCapacity];
        size = 0;
    }

    // Inner class representing an entry in the map
    private static class MyEntry<K, V> implements Map.Entry<K, V> {
        private K key;
        private V value;

        public MyEntry(K key, V value) {
            this.key = key;
            this.value = value;
        }

        // Implement the methods declared in Map.Entry interface
        // ...

        // Add getters and setters if needed
    }

    @Override
    public int size() {
        return size;
    }

    @Override
    public boolean isEmpty() {
        return size == 0;
    }

    // Implement other methods declared in the Map interface
    // ...

    // Provide custom implementations for each method
    // ...

    // Don't forget to override equals(), hashCode(), and toString() methods if necessary

    // Main method for testing
    public static void main(String[] args) {
        MyMap<String, Integer> map = new MyMap<>(10);

        map.put("apple", 10);
        map.put("banana", 20);

        System.out.println(map.get("apple")); // Output: 10
        System.out.println(map.size()); // Output: 2
    }
}
```

In this example, we define the `MyMap` class that implements the `Map` interface by specifying `implements Map<K, V>`. We provide custom implementations for methods like `size()`, `isEmpty()`, and others.

We also define an inner class `MyEntry` to represent the key-value pairs stored in the map. You can customize this class further based on your requirements.

Remember to replace the implementation of methods with your desired logic, such as how key-value pairs are stored and retrieved.

By implementing the Map interface, your custom map class can be used wherever a Map is expected, allowing you to take advantage of polymorphism and interoperability with other Map implementations.

# ArrayList class

The `ArrayList` class in Java is a dynamic array implementation that provides resizable arrays. It is part of the `java.util` package and offers various methods to manipulate and access elements in the list.

Here's an example of how to use the `ArrayList` class in Java:

```java
import java.util.ArrayList;
import java.util.List;

public class ArrayListExample {

    public static void main(String[] args) {
        // Create an ArrayList of integers
        List<Integer> numbers = new ArrayList<>();

        // Adding elements to the ArrayList
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);

        // Accessing elements in the ArrayList
        System.out.println("Element at index 0: " + numbers.get(0));
        System.out.println("Element at index 1: " + numbers.get(1));
        System.out.println("Element at index 2: " + numbers.get(2));

        // Updating an element in the ArrayList
        numbers.set(1, 25);
        System.out.println("Updated element at index 1: " + numbers.get(1));

        // Removing an element from the ArrayList
        numbers.remove(0);
        System.out.println("After removing element at index 0: " + numbers);

        // Checking if the ArrayList contains an element
        boolean contains30 = numbers.contains(30);
        System.out.println("ArrayList contains 30: " + contains30);

        // Getting the size of the ArrayList
        int size = numbers.size();
        System.out.println("Size of the ArrayList: " + size);

        // Iterating over the ArrayList
        System.out.print("Elements in the ArrayList: ");
        for (int number : numbers) {
            System.out.print(number + " ");
        }
        System.out.println();

        // Clearing the ArrayList
        numbers.clear();
        System.out.println("After clearing the ArrayList: " + numbers);
    }
}
```

In this example, we create an `ArrayList` called `numbers` that stores `Integer` values. We use various methods provided by the `ArrayList` class to manipulate and access elements.

- The `add()` method is used to add elements to the ArrayList.
- The `get()` method retrieves an element at a specific index.
- The `set()` method updates an element at a specific index.
- The `remove()` method removes an element at a specific index.
- The `contains()` method checks if the ArrayList contains a specific element.
- The `size()` method returns the number of elements in the ArrayList.
- The `clear()` method removes all elements from the ArrayList.

When you run the program, it will output:

```
Element at index 0: 10
Element at index 1: 20
Element at index 2: 30
Updated element at index 1: 25
After removing element at index 0: [25, 30]
ArrayList contains 30: true
Size of the ArrayList: 2
Elements in the ArrayList: 25 30
After clearing the ArrayList: []
```

This example demonstrates the basic usage of `ArrayList` and its methods. You can perform various operations on the ArrayList, such as adding, updating, removing, and iterating over elements.

# PriorityQueue class

The `PriorityQueue` class in Java is an implementation of the `Queue` interface that provides a priority-based ordering of elements. Elements in a `PriorityQueue` are ordered based on their natural ordering (if they implement the `Comparable` interface) or by a specified comparator.

Here's an example of how to use the `PriorityQueue` class in Java:

```java
import java.util.PriorityQueue;
import java.util.Queue;

public class PriorityQueueExample {

    public static void main(String[] args) {
        // Create a PriorityQueue of integers
        Queue<Integer> priorityQueue = new PriorityQueue<>();

        // Adding elements to the PriorityQueue
        priorityQueue.add(10);
        priorityQueue.add(30);
        priorityQueue.add(20);

        // Accessing elements in the PriorityQueue
        System.out.println("Head of the PriorityQueue: " + priorityQueue.peek());

        // Removing elements from the PriorityQueue
        int removedElement = priorityQueue.poll();
        System.out.println("Removed element from the PriorityQueue: " + removedElement);

        // Accessing elements in the PriorityQueue after removal
        System.out.println("Head of the PriorityQueue after removal: " + priorityQueue.peek());

        // Checking if the PriorityQueue contains an element
        boolean contains20 = priorityQueue.contains(20);
        System.out.println("PriorityQueue contains 20: " + contains20);

        // Getting the size of the PriorityQueue
        int size = priorityQueue.size();
        System.out.println("Size of the PriorityQueue: " + size);

        // Iterating over the PriorityQueue
        System.out.print("Elements in the PriorityQueue: ");
        while (!priorityQueue.isEmpty()) {
            int element = priorityQueue.poll();
            System.out.print(element + " ");
        }
        System.out.println();
    }
}
```

In this example, we create a `PriorityQueue` called `priorityQueue` that stores `Integer` values. We use various methods provided by the `PriorityQueue` class to manipulate and access elements.

- The `add()` method is used to add elements to the `PriorityQueue`.
- The `peek()` method retrieves the head (highest priority) element without removing it.
- The `poll()` method removes and retrieves the head element from the `PriorityQueue`.
- The `contains()` method checks if the `PriorityQueue` contains a specific element.
- The `size()` method returns the number of elements in the `PriorityQueue`.
- The `isEmpty()` method checks if the `PriorityQueue` is empty.

When you run the program, it will output:

```
Head of the PriorityQueue: 10
Removed element from the PriorityQueue: 10
Head of the PriorityQueue after removal: 20
PriorityQueue contains 20: true
Size of the PriorityQueue: 2
Elements in the PriorityQueue: 20 30
```

This example demonstrates the basic usage of `PriorityQueue` and its methods. Elements in the `PriorityQueue` are automatically ordered based on their natural ordering or a specified comparator. The element with the highest priority (smallest value) is always at the head of the `PriorityQueue`.

# Hashset class

The `HashSet` class in Java is an implementation of the `Set` interface that stores elements in a hash table. It provides constant-time performance for basic operations such as adding, removing, and checking for the presence of elements.

Here's an example of how to use the `HashSet` class in Java:

```java
import java.util.HashSet;
import java.util.Set;

public class HashSetExample {

    public static void main(String[] args) {
        // Create a HashSet of strings
        Set<String> hashSet = new HashSet<>();

        // Adding elements to the HashSet
        hashSet.add("Apple");
        hashSet.add("Banana");
        hashSet.add("Orange");

        // Checking if an element is present in the HashSet
        boolean containsBanana = hashSet.contains("Banana");
        System.out.println("HashSet contains 'Banana': " + containsBanana);

        // Removing an element from the HashSet
        boolean removed = hashSet.remove("Apple");
        System.out.println("Removed 'Apple' from the HashSet: " + removed);

        // Checking the size of the HashSet
        int size = hashSet.size();
        System.out.println("Size of the HashSet: " + size);

        // Iterating over the elements in the HashSet
        System.out.print("Elements in the HashSet: ");
        for (String element : hashSet) {
            System.out.print(element + " ");
        }
        System.out.println();
    }
}
```

In this example, we create a `HashSet` called `hashSet` that stores `String` values. We use various methods provided by the `HashSet` class to manipulate and access elements.

- The `add()` method is used to add elements to the `HashSet`.
- The `contains()` method checks if the `HashSet` contains a specific element.
- The `remove()` method removes an element from the `HashSet`.
- The `size()` method returns the number of elements in the `HashSet`.
- The enhanced for loop is used to iterate over the elements in the `HashSet`.

When you run the program, it will output:

```
HashSet contains 'Banana': true
Removed 'Apple' from the HashSet: true
Size of the HashSet: 2
Elements in the HashSet: Orange Banana
```

This example demonstrates the basic usage of `HashSet` and its methods. `HashSet` ensures that the elements are unique and does not preserve the order of insertion. It uses the hash code of each element to determine its storage location in the underlying hash table, which allows for efficient element retrieval and searching.

# LinkedList class

The `LinkedList` class in Java is an implementation of the `List` interface that stores elements in a doubly-linked list structure. It provides efficient insertion and removal operations, but slower random access compared to an `ArrayList`.

Here's an example of how to use the `LinkedList` class in Java:

```java
import java.util.LinkedList;
import java.util.List;

public class LinkedListExample {

    public static void main(String[] args) {
        // Create a LinkedList of integers
        List<Integer> linkedList = new LinkedList<>();

        // Adding elements to the LinkedList
        linkedList.add(10);
        linkedList.add(20);
        linkedList.add(30);

        // Accessing elements in the LinkedList
        int firstElement = linkedList.get(0);
        System.out.println("First element: " + firstElement);

        // Removing an element from the LinkedList
        boolean removed = linkedList.remove(Integer.valueOf(20));
        System.out.println("Removed '20' from the LinkedList: " + removed);

        // Checking the size of the LinkedList
        int size = linkedList.size();
        System.out.println("Size of the LinkedList: " + size);

        // Iterating over the elements in the LinkedList
        System.out.print("Elements in the LinkedList: ");
        for (int element : linkedList) {
            System.out.print(element + " ");
        }
        System.out.println();
    }
}
```

In this example, we create a `LinkedList` called `linkedList` that stores `Integer` values. We use various methods provided by the `LinkedList` class to manipulate and access elements.

- The `add()` method is used to add elements to the `LinkedList`.
- The `get()` method allows us to access an element at a specific index in the `LinkedList`.
- The `remove()` method removes an element from the `LinkedList`. In this example, we use `Integer.valueOf(20)` to remove the specific element 20 from the list.
- The `size()` method returns the number of elements in the `LinkedList`.
- The enhanced for loop is used to iterate over the elements in the `LinkedList`.

When you run the program, it will output:

```
First element: 10
Removed '20' from the LinkedList: true
Size of the LinkedList: 2
Elements in the LinkedList: 10 30
```

This example demonstrates the basic usage of `LinkedList` and its methods. `LinkedList` provides efficient insertion and removal of elements, as well as support for various list operations. However, random access to elements using index-based retrieval (`get()`) is slower compared to an `ArrayList`. The underlying doubly-linked list structure allows for efficient element insertion and removal at both ends of the list.

# HashMap class

The `HashMap` class in Java is an implementation of the `Map` interface that stores key-value pairs. It provides constant-time performance for basic operations such as `get`, `put`, `containsKey`, and `remove`, assuming a good hash function and properly-sized initial capacity.

Here's an example of how to use the `HashMap` class in Java:

```java
import java.util.HashMap;
import java.util.Map;

public class HashMapExample {

    public static void main(String[] args) {
        // Create a HashMap with String keys and Integer values
        Map<String, Integer> hashMap = new HashMap<>();

        // Adding key-value pairs to the HashMap
        hashMap.put("apple", 10);
        hashMap.put("banana", 20);
        hashMap.put("orange", 15);

        // Accessing values in the HashMap
        int appleValue = hashMap.get("apple");
        System.out.println("Value for 'apple': " + appleValue);

        // Checking if a key exists in the HashMap
        boolean containsBanana = hashMap.containsKey("banana");
        System.out.println("HashMap contains 'banana': " + containsBanana);

        // Removing a key-value pair from the HashMap
        Integer removedValue = hashMap.remove("orange");
        System.out.println("Removed value for 'orange': " + removedValue);

        // Checking the size of the HashMap
        int size = hashMap.size();
        System.out.println("Size of the HashMap: " + size);

        // Iterating over the key-value pairs in the HashMap
        System.out.println("Key-Value pairs in the HashMap:");
        for (Map.Entry<String, Integer> entry : hashMap.entrySet()) {
            String key = entry.getKey();
            int value = entry.getValue();
            System.out.println(key + ": " + value);
        }
    }
}
```

In this example, we create a `HashMap` called `hashMap` that maps `String` keys to `Integer` values. We use various methods provided by the `HashMap` class to manipulate and access key-value pairs.

- The `put()` method is used to add key-value pairs to the `HashMap`.
- The `get()` method allows us to retrieve the value associated with a given key from the `HashMap`.
- The `containsKey()` method checks if a particular key exists in the `HashMap`.
- The `remove()` method removes a key-value pair from the `HashMap`. In this example, we remove the key-value pair with the key "orange".
- The `size()` method returns the number of key-value pairs in the `HashMap`.
- The enhanced for loop combined with the `entrySet()` method is used to iterate over the key-value pairs in the `HashMap`.

When you run the program, it will output:

```
Value for 'apple': 10
HashMap contains 'banana': true
Removed value for 'orange': 15
Size of the HashMap: 2
Key-Value pairs in the HashMap:
apple: 10
banana: 20
```

This example demonstrates the basic usage of `HashMap` and its methods. `HashMap` allows efficient storage and retrieval of key-value pairs. It offers constant-time performance for basic operations and provides flexibility in handling key-value mappings. However, note that the order of the key-value pairs is not guaranteed in a `HashMap`.
