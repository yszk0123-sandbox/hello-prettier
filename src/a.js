import React from 'react'

type Props = {
  name: string,
  age: number,
}

function Hoge ({name, age }: Props) {
  return (
    <div style={{hoge:1,foo:2}}>
      <span>My name is { name}</span>
    <span>I'm {age} years old</span>
        <span>Hello, world!</span>
      <div style={{very:1,long:2,parameters:3,a:10000000000000000000,b:20000000000000000000}}></div>
    </div>
  )
}
