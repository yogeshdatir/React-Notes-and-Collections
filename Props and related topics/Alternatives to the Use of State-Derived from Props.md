# Alternatives to the **<u>Use of state derived from props</u>**

## **Send setter function along with props.**

That is, there will be only one copy of state and it will be stored and maintained/changed only in the parent component.

For example, in a to-do app, after clicking a to-do, send the entire to-do as well as updateToDo function to the To-Do detail component. In this way, you don't have to maintain the changes in To-Do in detail component repeatedly.