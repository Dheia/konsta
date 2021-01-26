import { useState } from 'react';

import Checkbox from '../tailwind-mobile/components/Checkbox';
import BlockTitle from '../tailwind-mobile/components/BlockTitle';
import Block from '../tailwind-mobile/components/Block';
import List from '../tailwind-mobile/components/List';
import ListItem from '../tailwind-mobile/components/ListItem';

export default function CheckboxDemo() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);

  // Group
  const [group, setGroup] = useState(['Books']);
  const toggleGroupValue = (value) => {
    if (group.includes(value)) group.splice(group.indexOf(value), 1);
    else group.push(value);
    setGroup([...group]);
  };

  // Indeterminate
  const [movies, setMovies] = useState(['Movie 1']);
  const onMovieChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      movies.push(value);
    } else {
      movies.splice(movies.indexOf(value), 1);
    }
    setMovies([...movies]);
  };
  const onMoviesChange = () => {
    if (movies.length === 1 || movies.length === 0) {
      setMovies(['Movie 1', 'Movie 2']);
    } else if (movies.length === 2) {
      setMovies([]);
    }
  };

  // Media
  const [media, setMedia] = useState(['Item 1']);
  const toggleMediaValue = (value) => {
    if (media.includes(value)) media.splice(media.indexOf(value), 1);
    else media.push(value);
    setMedia([...media]);
  };

  return (
    <>
      <BlockTitle className="text-4xl">Checkbox</BlockTitle>
      <BlockTitle>Inline</BlockTitle>
      <Block strong>
        <p>
          Lorem{' '}
          <Checkbox
            name="checkbox-1"
            checked={checked1}
            onChange={(e) => setChecked1(e.target.checked)}
          />{' '}
          ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae illo
          nihil aut eius commodi sint eveniet aliquid eligendi{' '}
          <Checkbox
            name="checkbox-2"
            checked={checked2}
            onChange={(e) => setChecked2(e.target.checked)}
          />{' '}
          ad delectus impedit tempore nemo, enim vel praesentium consequatur
          nulla mollitia!
        </p>
      </Block>

      <BlockTitle>Checkbox Group</BlockTitle>
      <List>
        <ListItem
          label
          title="Books"
          media={
            <Checkbox
              tag="div"
              name="demo-checkbox"
              checked={group.includes('Books')}
              onChange={() => toggleGroupValue('Books')}
            />
          }
        />
        <ListItem
          label
          title="Movies"
          media={
            <Checkbox
              tag="div"
              name="demo-checkbox"
              checked={group.includes('Movies')}
              onChange={() => toggleGroupValue('Movies')}
            />
          }
        />
        <ListItem
          label
          title="Food"
          media={
            <Checkbox
              tag="div"
              name="demo-checkbox"
              checked={group.includes('Food')}
              onChange={() => toggleGroupValue('Food')}
            />
          }
        />
        <ListItem
          label
          title="Drinks"
          media={
            <Checkbox
              tag="div"
              name="demo-checkbox"
              checked={group.includes('Drinks')}
              onChange={() => toggleGroupValue('Drinks')}
            />
          }
        />
      </List>

      <BlockTitle>Indeterminate State</BlockTitle>
      <List>
        <ListItem
          label
          title="Movies"
          name="demo-checkbox"
          media={
            <Checkbox
              checked={movies.length === 2}
              indeterminate={movies.length === 1}
              onChange={onMoviesChange}
            />
          }
        >
          <ul className="pl-12">
            <ListItem
              label
              title="Movie 1"
              media={
                <Checkbox
                  name="demo-checkbox"
                  value="Movie 1"
                  checked={movies.indexOf('Movie 1') >= 0}
                  onChange={onMovieChange}
                />
              }
            />
            <ListItem
              label
              title="Movie 2"
              media={
                <Checkbox
                  name="demo-checkbox"
                  value="Movie 2"
                  checked={movies.indexOf('Movie 2') >= 0}
                  onChange={onMovieChange}
                />
              }
            />
          </ul>
        </ListItem>
      </List>

      <BlockTitle>With Media Lists</BlockTitle>
      <List>
        <ListItem
          label
          title="Facebook"
          after="17:14"
          subtitle="New messages from John Doe"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
          media={
            <Checkbox
              tag="div"
              name="demo-media-checkbox"
              checked={media.includes('Item 1')}
              onChange={() => toggleMediaValue('Item 1')}
            />
          }
        />
        <ListItem
          label
          title="John Doe (via Twitter)"
          after="17:11"
          subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
          media={
            <Checkbox
              tag="div"
              name="demo-media-checkbox"
              checked={media.includes('Item 2')}
              onChange={() => toggleMediaValue('Item 2')}
            />
          }
        />
      </List>
    </>
  );
}