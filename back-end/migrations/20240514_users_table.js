export function up(knex) {
    return knex.schema.createTable('users', (table) => {
      table.increments('id').primary();        // Auto-incremented integer ID
      table.string('name');                    // Optional string field for name
      table.string('email').unique().notNullable(); // Required, must be unique
      table.timestamps(true, true);            // Adds created_at and updated_at columns
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable('users');     // Reverts this migration
  }