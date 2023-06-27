import { useLogoutRedirect } from 'hooks/useLogoutRedirect';

export const Products = () => {
  useLogoutRedirect();

  return (
    <>
      <div>
        <b>Products page</b>
      </div>
      <br />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, aperiam. Fugit id laborum
        facere neque possimus magnam excepturi alias! Atque saepe quae et aliquam architecto. Laborum eaque
        tempore cumque totam voluptatibus consequatur accusamus commodi nesciunt, eius inventore quibusdam
        architecto, possimus mollitia incidunt perferendis repudiandae blanditiis nobis voluptate voluptatum
        molestias ut. Laborum, reiciendis quis aspernatur odit aliquam delectus id officia et deserunt!
        Possimus quisquam doloremque iusto illo deserunt nisi odit vel ipsum, fugit iure maiores repudiandae
        accusantium natus minus pariatur tempora reiciendis nam ipsam architecto est. Reiciendis cum, rerum
        consequuntur adipisci similique minima ipsa molestias, beatae perferendis tempore illo veritatis rem.
      </div>
    </>
  );
};
