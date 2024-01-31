import React from 'react';
import styles from './PostOne.module.css';
import Image from 'next/image';

export const PostOne = () => {
  return (
    <section className={styles['post_section']}>
      <div className={styles['post_container']}>

      <header className={styles['post_header']}> 
        <h2 className={styles['post_title']}>¿Cómo comenzar si sueño con ser artista?</h2>
        
      </header>
      <div className={styles['post_image']}>
        <Image src='/cover/1.jpg' alt='cover' width={1080} height={720}  className={styles['post_image__img']} />
      </div>
      <article className={styles['post_article']}>
        <p className={styles['post_paragraph']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet enim tortor at auctor urna nunc id cursus. Quis varius quam quisque id. Lobortis mattis aliquam faucibus purus in. Id neque aliquam vestibulum morbi. Tristique senectus et netus et malesuada fames ac turpis egestas. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Nulla facilisi morbi tempus iaculis urna id. Turpis massa sed elementum tempus egestas. Fusce ut placerat orci nulla pellentesque. Nam aliquam sem et tortor. Purus sit amet volutpat consequat. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Mauris augue neque gravida in fermentum et sollicitudin ac orci.

        </p>

        <p className={styles['post_paragraph']}>Fusce id velit ut tortor pretium. Sollicitudin nibh sit amet commodo nulla facilisi. Ut tellus elementum sagittis vitae et leo duis ut. Sit amet aliquam id diam. Id porta nibh venenatis cras sed felis. Libero enim sed faucibus turpis in eu mi. Vitae suscipit tellus mauris a diam maecenas. Neque laoreet suspendisse interdum consectetur libero id faucibus. Volutpat blandit aliquam etiam erat velit scelerisque. Pellentesque elit eget gravida cum sociis natoque. Curabitur vitae nunc sed velit dignissim sodales. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Sed lectus vestibulum mattis ullamcorper. Quis ipsum suspendisse ultrices gravida dictum. Eu consequat ac felis donec et odio pellentesque diam.

 </p>
        <div className={styles['post_image']}>
        <Image src='/cover/2.jpg' alt='cover' />
      </div>
        <p className={styles['post_paragraph']}>Tincidunt eget nullam non nisi est sit amet facilisis magna. Natoque penatibus et magnis dis parturient montes nascetur. Rhoncus dolor purus non enim praesent elementum facilisis. Amet nisl suscipit adipiscing bibendum est. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Viverra nibh cras pulvinar mattis. Porttitor massa id neque aliquam vestibulum. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Volutpat blandit aliquam etiam erat velit. Ultrices eros in cursus turpis massa tincidunt dui ut ornare.
        </p>
        <p className={styles['post_paragraph']}>Velit egestas dui id ornare. Gravida arcu ac tortor dignissim convallis aenean et tortor. Lectus vestibulum mattis ullamcorper velit sed. Placerat in egestas erat imperdiet sed euismod nisi. Sed risus ultricies tristique nulla aliquet. Nulla facilisi etiam dignissim diam. Est velit egestas dui id ornare. Sed faucibus turpis in eu mi bibendum neque egestas congue. Dignissim diam quis enim lobortis scelerisque fermentum. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Volutpat est velit egestas dui id. Eleifend mi in nulla posuere sollicitudin aliquam. Arcu felis bibendum ut tristique et. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Sed faucibus turpis in eu mi bibendum neque egestas congue. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Amet purus gravida quis blandit turpis cursus. Fusce ut placerat orci nulla pellentesque dignissim. Elit sed vulputate mi sit amet mauris commodo.
        </p>
        

        <p className={styles['post_paragraph']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet enim tortor at auctor urna nunc id cursus. Quis varius quam quisque id. Nisl nunc mi ipsum faucibus vitae aliquet
        </p>
        <div className={styles['post_image']}>
        <Image src='/cover/1.jpg' alt='cover'   
           />
       </div>

        <p className={styles['post_paragraph']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet enim tortor at auctor urna nunc id cursus. Quis varius quam quisque id. Nisl nunc mi ipsum faucibus vitae aliquet
        </p>

        </article>

        <div className={styles['post_author__date']}>
          <p className={styles['post_author']}><span className={styles['post_author__name']}>Lyov Pinapple</span></p>
          <p className={styles['post_date']}>Enero 2024</p>
        </div>

        </div>
     
    </section>
  );
}

export default PostOne;
