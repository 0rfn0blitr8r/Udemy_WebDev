# React Effects

## Rendering & State

Recap:
- State setter function is called
- code finishes running
- component rerenders
- in this render, state has the new value

**Stuff can be done after a render!**

## Rendering & Effects

- changing parts of the DOM not covered in React
- in Async operations
- doing things when a component is _unmounted_ 

**Effects** are for _side-effects_, things   
which are unrelated to render

## useEffect
To use an effect, register it with _useEffect(fn)_

### arguments in useEffect()
- useEffect(callbackFn) :  
runs the fn after _every render_

- useEffect(callbackFn, [ prodId, varId ]):   
runs the fn **only** if _prodId_ or _varId_ changed

- useEffect(callbackFn, [ ]):   
runs only the first time, on _mount_