import Form from "@/components/Form";
import { getPaletteDetail } from "@/utils/functions";
import { IPalette } from "@/utils/types";

const EditPalette = async ({ params: { id } }: { params: { id: string } }) => {
  const palette: IPalette = await getPaletteDetail(id);
  return (
    <div className="px-32 py-10 min-h-screen flex flex-col justify-start items-center w-full">
      <h1 className="text-8xl font-extrabold my-10">Edit Palette</h1>
      <Form
        edit
        title={palette.title}
        description={palette.description}
        prevColors={palette.colors}
        theme={palette.theme}
        id={id}
      />
    </div>
  );
};

export default EditPalette;
