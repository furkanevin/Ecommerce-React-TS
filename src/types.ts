export type Category = {
  id: number;
  code: string;
  children: string[];
  name: string;
  slug: string;
  description: string;
};

function onFormSubmit(event: Event) {
  event.preventDefault();
}
