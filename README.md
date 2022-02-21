# Example of using SAP UI5 components with Hilla

## Requirements

- Java 11

## Running the app

Run the app by running `Application.java` from your IDE, or from the command line with the Maven-wrapper:

```
./mvnw
```

## Tutorial: adding SAP UI 5 components to a Hilla project

1. Create new project with `npx @vaadin/cli init --hilla hilla-ui5`
2. Install SAP UI5 components `npm install @ui5/webcomponents`
3. Import a component `import '@ui5/webcomponents/dist/DatePicker.js';`
4. Use the component `<ui5-date-picker></ui5-date-picker>`
