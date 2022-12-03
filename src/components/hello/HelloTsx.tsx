import { defineComponent, PropType } from 'vue';
import { defineProps, defineEmits } from 'vue';
// const props = defineProps({
//   hi: {
//     type: String,
//     required: true,
//   },
// });
import { toRefs } from 'vue';

interface Props {
  hi?: string;
}

// export default defineComponent({
//   name: 'hello-tsx',
//   setup: (props: Props) => {
//     const _props = defineProps({
//       hi: String,
//     });
//     const { hi } = toRefs(_props);
//     console.log('hello', toRefs(props), toRefs(_props));
//     return () => {
//       return <div>hello-tsx,{{ hi }}==</div>;
//     };
//   },
// });

export default (
  props: {
    hi?: string;
    b: string;
    onClick: (e: string) => void;
    [key: string]: any;
  },
  ctx: any,
) => {
  console.log('rpos', props, ctx);
  const { hi, b } = props;
  console.log('hi', hi);
  const onClick = (e: { stopPropagation: () => void }) => {
    props?.onClick?.('onClick1');
    e.stopPropagation();
    // ctx.emit('onClick')
    // props?.hasClick?.('has click');
  };
  const onClick2 = (e: MouseEvent) => {
    props?.onClick?.('onClick2');
    e.stopPropagation();
  };
  const onClick3 = (e: any) => {
    // props.onClick('click 3 child');
    console.log('e', e);
    console.log('click 3 child');
    // e.stopPropagation();
  };
  return (
    // <div onClick={onClick}>
    <div>
      sfsdklf = {hi}
      <div onClick={onClick2}>sfsdfsdfsdf</div>
      <Child onClick={onClick3} />
    </div>
  );
};

export const Child = (props: any) => {
  const onClick = (e: any) => {
    e.stopPropagation();
    props?.onClick?.();
  };
  return <div onClick={onClick}>childClick</div>;
};
