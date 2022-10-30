import { useSnackbar, VariantType } from 'notistack';

export const useNotifier = () => {
  const { enqueueSnackbar } = useSnackbar();

  const notice = (message: string, variant?: VariantType) => {
    enqueueSnackbar(message, {
      variant,
      autoHideDuration: 3000,
    });
  };

  return { notice };
};
