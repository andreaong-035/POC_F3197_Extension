import ControllerExtension from 'sap/ui/core/mvc/ControllerExtension';
import Spreadsheet from 'sap/ui/export/Spreadsheet';

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

      // 1. Get the URL of your adaptation project's namespace
      const projectPath = sap.ui.require.toUrl(
        'customer/physicalinvetory/appvar/dd',
      );

      // 2. Map the importer namespace to the local physical path
      sap.ui.loader.config({
        paths: {
          'cc/spreadsheetimporter/v1_7_4':
            projectPath +
            '/thirdparty/customcontrol/spreadsheetimporter/v1_7_4',
        },
      });
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

  public async onExport(): Promise<void> {
    // Contoh penggunaan Spreadsheet import
    // const oSpreadsheet = new Spreadsheet(settings);
    // oSpreadsheet.build();
  }
}
