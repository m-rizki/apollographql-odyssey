import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000",
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  /**
   * By setting ignoreNoDocuments to true, 
   * we're telling GraphQL Code Generator not to worry if it doesn't find any GraphQL operations in our frontend code; 
   * it should proceed with outputting its default generated code anyway.
   */
  // ignoreNoDocuments: true,
};

export default config;
