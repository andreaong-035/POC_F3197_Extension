import ControllerExtension from 'sap/ui/core/mvc/ControllerExtension';

/**
 * @namespace customer.physicalinvetory.appvar.dd
 * @controller
 */
export default class UploadFile extends ControllerExtension {
  overrides = {
    /**
     * Called when a controller is instantiated and its View controls (if available) are already created.
     * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
     * @memberOf customer.physicalinvetory.appvar.dd.UploadFile
     */
    onInit(this: UploadFile) {
      const view = this.getView();
    },
  };

  onPress() {
    console.log(`=== Only for Debug === ${Date.now()}`);
  }

  async onUpload() {
    const view = this.getView();
    // In ControllerExtensions, 'base' provides access to the base controller
    const component = view.getController().getOwnerComponent();

    const spreadsheetUploadComponent = (await component?.createComponent({
      usage: 'customer.upload',
      async: true,
      componentData: {
        context: this,
        // odataType: 'FCLM_BM_SRV.Bank',
      },
    })) as any;

    spreadsheetUploadComponent.openSpreadsheetUploadDialog();
  }
}
