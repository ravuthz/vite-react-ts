import React, { useEffect, useState } from 'react';
import localforage from 'localforage';

import classes from './AppStorage.module.css';
import useLocalForge from '../../hooks/useLocalForge';
import useLocalStorage from '../../hooks/useLocalStorage';
import useSessionStorage from '../../hooks/useSessionStorage';
import { Button } from "antd";

const AppStorage: React.FC = (props: any) => {
  const [posts1, setPosts1] = useLocalForge('forage.posts', [], localforage.WEBSQL);
  const [posts2, setPosts2] = useLocalForge('forage.posts', [], localforage.INDEXEDDB);
  const [posts3, setPosts3] = useLocalForge('forage.posts', [], localforage.LOCALSTORAGE);

  const [localPosts, setLocalPosts] = useLocalStorage('posts', []);
  const [sessionPosts, setSessionPosts] = useSessionStorage('posts', []);

  const onButtonClick = () => {
    const data = ['post1', 'post2', 'post3'];

    setPosts1(data);
    setPosts2(data);
    setPosts3(data);
    setLocalPosts(data);
    setSessionPosts(data);
  };

  useEffect(() => {
    console.log('AppStorage mounted');

    return () => {
      console.log('AppStorage unmounted');
    };
  }, []);

  useEffect(() => {
    console.log('useEffect.AppStorage: ', props);
  }, [props]);

  return (
    <div data-testid="AppStorage" className={classes.AppStorage}>
      <h1>AppStorage</h1>
      <Button onClick={onButtonClick}>Set Posts</Button>
      <div>
        <pre>LocalStorage: {JSON.stringify(localPosts, null)}</pre>
        <pre>SessionStorage: {JSON.stringify(sessionPosts, null)}</pre>
        <pre>LocalForage[WEBSQL]: {JSON.stringify(posts1, null)}</pre>
        <pre>LocalForage[INDEXEDDB]: {JSON.stringify(posts2, null)}</pre>
        <pre>LocalForage[LOCALSTORAGE]: {JSON.stringify(posts3, null)}</pre>
      </div>
    </div>
  );
};

export default AppStorage;
